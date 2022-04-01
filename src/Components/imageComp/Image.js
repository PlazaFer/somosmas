import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Box from '@mui/material/Box'
const Image = ({ urlImg, alt, widthImg , heigthImg }) => {
    return (
        <Box>
            <LazyLoadImage
                src={urlImg}
                width={widthImg}
                height={heigthImg}
                alt={alt}
                effect="blur"
            />
        </Box>
    )
}

export default Image