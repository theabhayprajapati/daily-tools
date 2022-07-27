import { Typography } from '@cred/neopop-web/lib/components'
import { colorPalette, fontNameSpaces, FontVariant, mainColors } from '@cred/neopop-web/lib/primitives'

interface TextFieldProps {
    label: string
}
const TextFieild = ({ label }: TextFieldProps) => {
    return (
        <Typography {...fontNameSpaces.tc12b} color={mainColors.yellow} 
            fontType={FontVariant.CirkaHeadingBold20.fontType}
        >
            {label}
        </Typography>   
    )
}

export default TextFieild