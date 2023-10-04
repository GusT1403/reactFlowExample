import { useCallback } from 'react'
import { Handle, Position } from "reactflow"

const handleStyle = {left: 10}

function TextUpdaterNode({ data: isConnectable}) {
  
  const onChange = useCallback(
    (evt) => {<input id="text" name='text' onChange={onChange} className='nodrag' />
      console.log(evt.target.value)
    }, [])
  
  return (
    <div className='text-updater-node'>
      <Handle type='source' position={Position.Top} id='a' isConnectable={isConnectable} />
      <div>
        <label htmlFor="text">Text:</label>
        <div className='inputBox'>
          <input type="text" onChange={onChange} />
        </div>
      </div>
      <Handle type='source' position={Position.Bottom} id='c1' style={{ left: 10}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c2' style={{ left: 20}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c3' style={{ left: 30}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c4' style={{ left: 40}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c5' style={{ left: 50}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c6' style={{ left: 60}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c7' style={{ left: 70}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c8' style={{ left: 80}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c9' style={{ left: 10}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c10' style={{ left: 20}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c11' style={{ left: 30}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c12' style={{ left: 40}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c13' style={{ left: 50}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c14' style={{ left: 60}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c15' style={{ left: 70}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Bottom} id='c16' style={{ left: 80}} isConnectable={isConnectable} />
      <Handle type='source' position={Position.Right} id='b' isConnectable={isConnectable} />
    </div>
  )
}

export default TextUpdaterNode
