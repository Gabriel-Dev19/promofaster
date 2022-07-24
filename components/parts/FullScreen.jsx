export default function FullScreen(props) {
  return(
    <>
        <section
          style={{
            height: '100%',
            width: '100%',
            background: '#00000075',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1500
          }}
          className='modal-projetos'
        >
          {props.children}
        </section>
    </>
  )
}