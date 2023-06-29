import './PlacesTemplate.css';

interface PlacesTemplateProps {
    title: string;
    placeName: string;
    countryName: string;
    imageUrl: any;
    location: string;
    explanation: string;
}

export default function PlacesTemplate(props: PlacesTemplateProps): JSX.Element {
    return (
        <section>
            <h2 className='title'>{props.title}</h2>
            <h4 className='placeName'>{props.placeName} {props.countryName}</h4>
            <img className='images' src={props.imageUrl}/>
            <div className='details'>
                <h3> {props.location} </h3>
                <p> {props.explanation} </p>
            </div>
        </section>
    )
}