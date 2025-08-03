import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

const Editor = ({roomId}) => {
  return (
    <div style={{ position: 'relative', height: '100vh' }} >
      <Tldraw persistenceKey={roomId} />
    </div>
  )
}

export default Editor