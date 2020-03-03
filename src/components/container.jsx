/** @jsx jsx */
import { jsx, Container as Cont } from 'theme-ui'

const Container = ({ children, sx }) => (
    <Cont
        mx={`auto`}
        px={15}
        sx={{
            ...sx,
            maxWidth: t => t.sizes.containerSizes,
        }}>
        {children}
    </Cont>

)

export default Container