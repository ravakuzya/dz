import firstMan from './images/Men1.png';
import SecondMan from './images/Men2.png';
import ThirdMan from './images/Men3.png';
import FourthMan from './images/Men4.png';
import { Price, PriceTovar, PriceFirst } from './price';

export function ManFashion() {
    return (
        <section className='WomenFashion'>
            <div className='women-card-text'>
                <h3>MEN’S FASHION</h3>
                <p>Shop our new arrivals from established brands</p>
            </div>
            <div className='cards-first'>
                <div className='first-card'>
                    <img src={firstMan} alt="women1" />
                    <PriceTovar tovarName="ICURE" />
                    <Price textName='GREEN MUSCLE FIT POLO SHIRT' />
                    <PriceFirst priceFirst="$229.00" priceSecond="129.00" />
                </div>
                <div className='first-card'>
                    <img src={SecondMan} alt="women1" />
                    <PriceTovar tovarName="ICURE" />
                    <Price textName='GREEN MUSCLE FIT POLO SHIRT' />
                    <PriceFirst priceFirst="$229.00" priceSecond="129.00" />
                </div>
                <div className='first-card'>
                    <img src={ThirdMan} alt="women1" />
                    <PriceTovar tovarName="ICURE" />
                    <Price textName='GREEN MUSCLE FIT POLO SHIRT' />
                    <PriceFirst priceFirst="$229.00" priceSecond="129.00" />
                </div>
                <div className='first-card'>
                    <img src={FourthMan} alt="women1" />
                    <PriceTovar tovarName="ICURE" />
                    <Price textName='GREEN MUSCLE FIT POLO SHIRT' />
                    <PriceFirst priceFirst="$229.00" priceSecond="129.00" />
                </div>
            </div>
        </section>
    )
}

export default ManFashion()