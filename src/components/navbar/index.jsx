/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Logo from "../../assets/svg/logo.svg";

const Navbar = (props) => (
  <header
    sx={{
      height: `4rem`,
      px: 0,
      position: `absolute`,
      left: 0,
      right: 0
    }}
  >
    <Flex
      sx={{
        alignItems: `center`,
        fontFamily: `heading`,
        height: `100%`,
        margin: `0 auto`,
        px: 6,
        width: `100%`,
        position: `relative`,
        // "&:after": {
        //   bg: `transparent`,
        //   bottom: 0,
        //   content: `''`,
        //   height: 1,
        //   left: 0,
        //   position: `absolute`,
        //   right: 0,
        //   zIndex: -1,
        // },
      }}
    >
      <Logo 
        sx={{
          height: 40,
          fill: `#0b5172`,
        }}
      />
      <div>
        Test
      </div>
    </Flex>
  </header>
)

export default Navbar