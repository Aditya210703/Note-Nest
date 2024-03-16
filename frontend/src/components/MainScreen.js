import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './MainScreen.css'

const MainScreen = ({ title, children }) => {
  return (
    <div className='flex mt-16 min-h-screen px-0 py-2.5'>
      <Container>
        <Row>
          <div className='w-full'>
            {title && (
              <>
                <h1 className='text-5xl px-2.5 py-1.5 font-serif'>{ title }</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default MainScreen
