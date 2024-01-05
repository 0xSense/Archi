import './banner.css'
import WalletConnector from '../wallet-connector/wallet-connector';

const Banner = () => {
    return(
        <div className="banner-wrapper" >
            <div className='site-logo'>
                <b>Archi</b>
            </div>
            
            <div className='user-utility'>
                <div className='inventory-button'>
                    <div>Inventory</div>
                </div>

                <div className='games-button'>
                    <div>Games</div>
                </div>
                
            </div>
            

            <div className='wallet-connect'>
                <WalletConnector />
            </div>
        </div>
    )
};

export default Banner;