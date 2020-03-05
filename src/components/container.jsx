/** @jsx jsx */
import { jsx, Container as Cont } from 'theme-ui'

const Container = ({ children, sx, ...props }) => (
    <Cont
        mx={`auto`}
        px={15}
        sx={{
            ...sx,
            maxWidth: t => t.sizes.containerSizes,
        }}
        {...props}
    >
        {children}
    </Cont>

)

export default Container