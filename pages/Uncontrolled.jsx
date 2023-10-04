import { useCallback } from 'react'
import Reactflow, { ReactFlowProvider, useReactFlow } from 'reactflow'
import 'reactflow/dist/style.css'

import defaultNodes from './Uncontrolled/nodes'
import defaultEdges from './Uncontrolled/edges'

import './Uncontrolled/button.css'

const edgeOptions = {
  animated: true,
  style: { stroke: 'white' },
}

const connectionLineStyle = { stroke: 'white' }

let nodeId = 0

function Uncontrolled() {

  const reactFlowInstance = useReactFlow()
  const onClick =useCallback(() => {
    const id = `${++nodeId}`
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`
      },
    }
    reactFlowInstance.addNodes(newNode)
  }, [])

  return (
    <div style={{ height: 800 }}>
      <Reactflow 
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        defaultEdgeOptions={edgeOptions}
        fitView
        style={{
          backgroundColor: '#D3D2E5'
        }}
        connectionLineStyle={connectionLineStyle}
      >
      </Reactflow>
      <button onClick={onClick} className='btn-add'>Add node</button>
    </div>
  )
}

export default function () {
  return(
    <ReactFlowProvider>
      <Uncontrolled/>
    </ReactFlowProvider>
  )
}
