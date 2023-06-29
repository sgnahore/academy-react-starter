import PlacesTemplate from './PlacesTemplate';
import womanFashion from '../images/womanFashion.jpg';
import mexico from '../images/mexico.jpg'
import accra from '../images/accra.jpg'

export default function MainContent(): JSX.Element {
    const names = [<p key='1' >James</p>, <p key='2'>Neill</p>, 
    
    <p key='3'>Cynthia</p>,

    <PlacesTemplate key='4' 
             title={"My Safe Space"}
             placeName={"The Studio,"}
             countryName={"United Kingdom"}
             imageUrl={womanFashion}
             location={"London, UK"}
             explanation={"Here I would write about why this space is so amazing for me."}
            />

];

    return (
        <main>
            {names}
            <PlacesTemplate 
             title={"My Safe Space"}
             placeName={"The Studio,"}
             countryName={"United Kingdom"}
             imageUrl={womanFashion}
             location={"London, UK"}
             explanation={"Here I would write about why this space is so amazing for me."}
            />
            <PlacesTemplate 
             title={"My Happy Space"}
             placeName={"Cozumel Beach,"}
             countryName={"Mexico"}
             imageUrl={mexico}
             location={"Cozumel Island"}
             explanation={"Here I would write about why this space is so amazing for me."}
            />
             <PlacesTemplate 
             title={"My Home"}
             placeName={"Mountains,"}
             countryName={"Ghana"}
             imageUrl={accra}
             location={"Accra"}
             explanation={"Here I would write about why this space is so amazing for me."}
            />
             <PlacesTemplate 
             title={"test"}
             placeName={"test"}
             countryName={"test"}
             imageUrl={mexico}
             location={"test"}
             explanation={"Here I would write about why this space is so amazing for me."}
            />
        </main>
    );
}