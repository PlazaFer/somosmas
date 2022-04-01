import { useEffect, useState } from 'react';
import useStyles from './styles/HomeTitlesyles';
import { getOrganization } from '../../Services/Home';


const HomeTitle = () => {
    const classes = useStyles()

    const [title, setTitle] = useState()

    useEffect(() => {
		const getData = async () => {
			const { data } = await getOrganization();
            setTitle(data.welcome_text)
		}
		getData();
	}, [])

    return(
        <h1 className={classes.title}> { title } </h1>
    )
}

export default HomeTitle;