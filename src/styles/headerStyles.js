import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
`
// export const Logo = styled.div`
//   a {
//     font-size: 1.8rem;
//     text-decoration: none;
//     font-weight: 800;
//     color: #000;
//     color: ${props => props.theme.text};
//   }
//   span {
//     height: 16px;
//     width: 16px;
//     background: #ea291e;
//     margin: 0 4px;
//     border-radius: 100%;
//     display: inline-block;
//     position: relative;
//     bottom: 2px;
//   }
// `

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      margin: 8px;
    }
  }
`
