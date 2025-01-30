import firstWomen from './images/8.png';
import SecondWomen from './images/9.png';
import ThirdWomen from './images/6.png';
import FourthWomen from './images/7.png';
import { Price, PriceTovar, PriceFirst } from './price';

export function WomenFashion() {
    return (
        <section className='WomenFashion'>
            <div className='women-card-text'>
                <h3>WOMEN'S FASHION</h3>
                <p>Shop our new arrivals from established brands</p>
            </div>
            <div className='cards-first'>
                <div className='first-card'>
                    <img src={firstWomen} alt="women1" />
                    <PriceTovar tovarName="ICURE" />
                    <Price textName='GREEN MUSCLE FIT POLO SHIRT' />
                    <PriceFirst priceFirst="$229.00" priceSecond="129.00" />
                </div>
                <div className='first-card'>
                    <img src={SecondWomen} alt="women1" />
                    <PriceTovar tovarName="ICURE" />
                    <Price textName='GREEN MUSCLE FIT POLO SHIRT' />
                    <PriceFirst priceFirst="$229.00" priceSecond="129.00" />
                </div>
                <div className='first-card'>
                    <img src={ThirdWomen} alt="women1" />
                    <PriceTovar tovarName="ICURE" />
                    <Price textName='GREEN MUSCLE FIT POLO SHIRT' />
                    <PriceFirst priceFirst="$229.00" priceSecond="129.00" />
                </div>
                <div className='first-card'>
                    <img src={FourthWomen} alt="women1" />
                    <PriceTovar tovarName="ICURE" />
                    <Price textName='GREEN MUSCLE FIT POLO SHIRT' />
                    <PriceFirst priceFirst="$229.00" priceSecond="129.00" />
                </div>
            </div>
        </section>
    )
}

export default WomenFashion()