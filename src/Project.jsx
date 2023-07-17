import Description from './Project/Description';
import Footer from './Project/Footer';
import Image from './Project/Image';
import TextContent from './Project/TextContent';
import './project.css';

function Project(){
    return(
        <div className="card">
            <Image/>
            <div className="data">
                <Description/>
                <TextContent/>
            </div>
            <Footer/>
        </div>
    )
}

export default Project;


