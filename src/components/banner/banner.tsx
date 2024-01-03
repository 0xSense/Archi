import './banner.css'
import WalletConnector from '../wallet-connector/wallet-connector';

const Banner = () => {
    return(
        <div className="banner-wrapper" >
            <div className='site-name'>
                <b>Archi</b>
            </div>

            <div>
                <button>Shippers</button>
            </div>

            <div>
                <button>Misc</button>
            </div>
            
            <div>
                <button>Games</button>
            </div>
            
            <div>
                <WalletConnector />
            </div>
        </div>
    )
};

export default Banner;