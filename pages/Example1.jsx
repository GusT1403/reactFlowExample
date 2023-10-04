import { useCallback, useState } from "react"
import ReactFlow, { Controls, MiniMap, addEdge, applyEdgeChanges, applyNodeChanges, Background, Panel} from "reactflow"
import "reactflow/dist/style.css"

import initialNodes from "./Example1/nodes"
import initialEdges from "./Example1/edges" 

const nodeColor = (node) => {
  switch (node.type) {
    case 'input':
      return '#6ede87';
    case 'output':
      return '#6865a5';
    default:
      return '#ff0072';
  }
}

function Example1() {

  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes) => setNodes((nodes) => applyNodeChanges(changes, nodes)),
    [setNodes]
  )
  const onEdgesChange = useCallback(
    (changes) => setEdges((edges) => applyEdgeChanges(changes, edges)),
    [setEdges]
  )
  const onConnect = useCallback(
    (connection) => setEdges((edges) => addEdge({...connection, animated:true}, edges)),
    [setEdges]
  )

    const [variant, setVariant] = useState('dots');

  return (
    <div style={{ height: 800 }}>
      <ReactFlow 
      nodes={nodes}
      edges={edges}
      onNodeChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable></MiniMap>
      <Controls></Controls>
      <Background>
        <Panel>
          <div>Variant: </div>
          <button onClick={() => setVariant('dots')}>dots</button>
          <button onClick={() => setVariant('lines')}>lines</button>
          <button onClick={() => setVariant('cross')}>cross</button>
        </Panel>
      </Background>
    </ReactFlow>
    </div>
  )
}

export default Example1
