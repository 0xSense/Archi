import './banner.css'
import WalletConnector from '../wallet-connector/wallet-connector';

const Banner = () => {
    return(
        <div className="banner-wrapper" >
            <div className='site-logo'>
                <b>Archi</b>
            </div>
            
            <div className='user-utility'>
                <div>
                    <button className='inventory-button'>Inventory</button>
                </div>

                <div >
                    <button className='games-button'>Games</button>
                </div>
                
            </div>
            

            <div className='wallet-connect'>
                <WalletConnector />
            </div>
        </div>
    )
};

export default Banner;