import './banner.css'
import WalletConnector from '../wallet-connector/wallet-connector';

const Banner = () => {
    return(
        <div className="banner-wrapper" >
            <div className='site-name'>
                <b>Archi</b>
            </div>
            
            <div>
                <div>Inventory</div>
            </div>
            
            <div>
                <div>Games</div>
            </div>

            <div>
                <WalletConnector />
            </div>
        </div>
    )
};

export default Banner;