import styled from "@emotion/styled"

const Texto = styled.div`
  color: #fff;
  background-color: #b7322c;
  padding: 15px;
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;`


const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error