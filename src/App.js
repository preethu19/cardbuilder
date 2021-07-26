import "./App.css";

import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Circle, Text, Ellipse, Rect, Transformer, Line } from "react-konva";
import { v4 as uuid } from 'uuid';
import { Html } from "react-konva-utils";


const Rectangle = ({ shapeProps, isSelected, onSelect, onMove, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  return (
    <React.Fragment>
      <Rect
        onDblClick={onSelect}
        onDblTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        // draggable
        // onDragStart={onMove}
        // onTouchStart={onMove}
        onDragEnd={(e) => {
          
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};



const Circles = ({ shapeProps, isSelected, onSelect, onMove, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Circle
        onDblClick={onSelect}
        onDblTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        // draggable
        // onDragStart={onMove}
        // onTouchStart={onMove}
        onDragEnd={(e) => {
          
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            radius: Math.max(node.radius() * scaleX, node.radius() * scaleY),
            
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.radius < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

const Texts = ({ shapeProps, isSelected, onSelect, onMove, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  
  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  
  
 

  return (
    <React.Fragment>
      <Text
       
        onDblClick={onSelect}
        onDblTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        // draggable
        // onDragStart={onMove}
        // onTouchStart={onMove}
        onDragEnd={(e) => {
          
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};





export default function App() {
  const [circles, setCircles] = useState([]);
  const [rectangles, setRectangles] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [textEdit, setTextEdit] = useState(false)
  const [editShape, setEditShape] = useState(null)
  const [tool, setTool] = React.useState('');
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);
  const [useTool, setUseTool] = useState(false)

  const handleMouseDown = (e) => {
    if(useTool){
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setShapes([...shapes, { tool, points: [pos.x, pos.y], name: "line", index: lines.length }]);
      setLines([...lines, { tool, points: [pos.x, pos.y], name: "line" }]);
      
    }
    checkDeselect(e)
  };

  const handleMouseMove = (e) => {
    if(useTool){
      // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());

    // let lastLine = ''
    // for(var i=shapes.length-1; i > 0;i--){
    //   if(shapes[i].name=='line'){
    //     lastLine = shapes[shapes.length - 1];
    //   }
    // }
    
    // // add point
    // lastLine.points = lastLine.points.concat([point.x, point.y]);

    // // replace last
    // shapes.splice(shapes.length - 1, 1, lastLine);
    // setShapes(shapes.concat());
    }
    
  };

  const handleMouseUp = () => {
    if(useTool){
      isDrawing.current = false;
    }
    
  };

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
    setTextEdit(false)
  };

  const stageRef = useRef(null);
  
  const onDelete = (item) => {
    setShapes((oldData) => {
      return (oldData.filter((currentData, index) => {
        return currentData.id !== item.id;
      }))
  })
  setShapes((prevShape)=>(
    [...prevShape, item]
  ))
}

  const onEdit = (e) => {
    setEditShape((shape)=> ({...shape, text:e.target.value}))
    setShapes(shapes.map((elem)=>{
      if(elem.id==selectedId){
        return {...elem, text:e.target.value}
      }
      return elem
    })
    )
  }
  return (
    <>
    <Stage 
        width={window.innerWidth} 
        height={window.innerHeight} 
        ref={stageRef} 
        onTouchStart={(e)=>{checkDeselect(e);handleMouseDown(e)}} 
        onMouseDown={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMousemove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
      <Layer>
        
        
       

      {shapes.map((eachShape, i)=> {
        if(eachShape.name=="rectangle"){
            return(
              <Rectangle
              key={i}
              shapeProps={eachShape}
              isSelected={eachShape.id === selectedId}
              onSelect={() => {
                setUseTool(false)
                onDelete(eachShape);
                selectShape(eachShape.id);
                
              }}
              onMove={()=>onDelete(eachShape)}
              onChange={(newAttrs) => {
                const rects = shapes.slice();
                rects[i] = newAttrs;
                setShapes(rects);
              }}
            />
            )
        }
        else if(eachShape.name=="circle"){
            return(
              <Circles
             key={i}
            shapeProps={eachShape}
            isSelected={eachShape.id === selectedId}
            onSelect={() => {
              setUseTool(false)
              onDelete(eachShape);
              selectShape(eachShape.id);
              
            }}
            onMove={()=>onDelete(eachShape)}
            onChange={(newAttrs) => {
              const rects = shapes.slice();
              rects[i] = newAttrs;
              setShapes(rects);
            }}
          />
        )
        }
        else if(eachShape.name=="text"){
          return(
            <Texts
              key={i}
              shapeProps={eachShape}
              isSelected={eachShape.id === selectedId}
              onSelect={() => {
                setUseTool(false)
                onDelete(eachShape);
                selectShape(eachShape.id);
                setEditShape(eachShape)
                setTextEdit(!textEdit)
                
              }}
              onMove={()=>onDelete(eachShape)}
              onChange={(newAttrs) => {
                const rects = shapes.slice();
                rects[i] = newAttrs;
                setShapes(rects);
              }}
            />
          )
        }
        {/* else if(eachShape.name=="line"){
          
          return(
            <Line
              key={i}
              points={lines[eachShape.index].points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                lines[eachShape.index].tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          )
         
        } */}
      })
      }
      
      {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}

        <Circle
          name="draggableCircle1"
          x={50}
          y={50}
          radius={25}
          stroke="black"
          id="circle1"
        />
        <Circle
          name="draggableCircle"
          x={50}
          y={50}
          radius={25}
          stroke="black"
          draggable
          id="circle2"
          onClick={()=>setUseTool(false)}
          onTap={()=>setUseTool(false)}
          onDragStart={()=>setUseTool(false)}
          onDragEnd={(e) => {
            // push new circle to view
            // note that we must push circle first before returning draggable circle
            // because e.target.x returns draggable circle's positions
            setShapes((prevCircles) => [
              ...prevCircles,
              { x: e.target.x(), y: e.target.y(), radius: 25, stroke:"black", id: uuid(), fill: "red", name:"circle" }
            ]);

            // return draggable circle to original position
            // notice the dot (.) before "draggableCircle"
            var stage = stageRef.current;
            var draggableCircle = stage.findOne(".draggableCircle");
            draggableCircle.position({ x: 50, y: 50 });
          }}
        />

      <Rect
        x= {25}
        y= {80}
        width= {50}
        height= {50}
        stroke="black"
        id= 'rect1'
      />
      <Rect
        name="draggableRect"
        x= {25}
        y= {80}
        width= {50}
        height= {50}
        stroke="black"
        id= 'rect1'
        draggable
        onClick={()=>setUseTool(false)}
        onTap={()=>setUseTool(false)}
        onDragStart={()=>setUseTool(false)}
        onDragEnd={(e) => {
            // push new circle to view
            // note that we must push circle first before returning draggable circle
            // because e.target.x returns draggable circle's positions
            setShapes((prevRectangles) => [
              ...prevRectangles,
              { x: e.target.x(), y: e.target.y(), stroke:"black", width: 50, height: 50, id: uuid(), fill: "green", name:"rectangle"}
            ]);

            // return draggable circle to original position
            // notice the dot (.) before "draggableCircle"
            var stage = stageRef.current;
            var draggableRectangle = stage.findOne(".draggableRect");
            draggableRectangle.position({ x: 25, y: 80 });
          }}
      />
      <Text
          fontSize={50}
          text="T"
          width={40}
          height={100}
          x={35}
          y={140}
        />
        <Text
          name="draggableText"
          x={35}
          y={140}
          text="T"
          fontSize={50}
          width={40}
          height={100}
          draggable
          onClick={()=>setUseTool(false)}
          onTap={()=>setUseTool(false)}
          onDragStart={()=>setUseTool(false)}
          onDragEnd={(e) => {
            // push new circle to view
            // note that we must push circle first before returning draggable circle
            // because e.target.x returns draggable circle's positions
            
            setShapes((prevTexts) => [
              ...prevTexts,
              { x: e.target.x(), y: e.target.y(), id: uuid(), text: "T", width: 40, textEditVisible:true, height:100, fontSize: 50, name:"text"}
            ]);

            // return draggable circle to original position
            // notice the dot (.) before "draggableCircle"
            var stage = stageRef.current;
            var draggableText = stage.findOne(".draggableText");
            draggableText.position({ x: 35, y: 140 });
          }}
      />
     <Html>
        <div>
        <input type="button" value="Pencil" style={tool=='pen' && useTool?{backgroundColor: "aqua"}:null} onClick={()=>{setTool('pen'); setUseTool(!useTool)}}/>
        <input type="button" value="Eraser" style={tool=='eraser' && useTool?{backgroundColor: "aqua"}:null} onClick={()=>{setTool('eraser'); setUseTool(!useTool)}} />
        </div>
        {textEdit?
          <textarea value={editShape.text} onChange={onEdit}></textarea>
          :null
        }
     </Html>
        
      </Layer>
    </Stage>
    
    
    </>
  );
}


