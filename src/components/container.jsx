/** @jsx jsx */
import { jsx, Container as Cont } from 'theme-ui'

const Container = ({ children, sx, psx, ...props }) => (
    <div {...psx} {...props}>
        <Cont
            mx={`auto`}
            px={15}
            sx={{
                maxWidth: t => t.sizes.containerSizes,
                ...sx,
            }}>
            {children}
        </Cont>
    </div>

)

export default Container