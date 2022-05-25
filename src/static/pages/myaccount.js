import {FaCalendarAlt, FaShoppingCart} from 'react-icons/fa'
import {ImTicket} from 'react-icons/im'

function MyAccount(){
    return(
        <div className="my-account">
            <div className="row border-bottom">
                <div className="col-1"></div>
                <div className="col-10 font-w-500 font-25 px-5 c-primary">My account</div>
            </div>
            <div className="row mt-4 border-bottom">
                <div className="col-2"></div>
                <div className="col-2 text-center tab active-tab mx-3">My Tickets</div>
                <div className="col-2 text-center tab">My Infomation</div>
                <div className="col"></div>
            </div>
            <div className="row justify-content-center my-acc-bg">
                <div className="ticket-table">
                    <div className="row justify-content-center">
                        <div className="col-4 text font-12"><ImTicket/>  Tickets</div>
                        <div className="col-4 text font-12"><FaCalendarAlt/>  Date And Time</div>
                        <div className="col-4 text font-12"><FaShoppingCart/>  Quantity</div>
                    </div>
                    <div className="row justify-content-center ticket-info">
                        <div className="col-4 text">Entry Ticket</div>
                        <div className="col-4 text">04 Apr 2022 (12:00)</div>
                        <div className="col-4 text">1</div>
                    </div>
                    <div className="row justify-content-center ticket-info">
                        <div className="col-4 text">Entry Ticket</div>
                        <div className="col-4 text">06 Apr 2022 (15:00)</div>
                        <div className="col-4 text">2</div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4 blank"></div>
                        <div className="col-4 blank"></div>
                        <div className="col-4 blank"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4 blank"></div>
                        <div className="col-4 blank"></div>
                        <div className="col-4 blank"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4 blank"></div>
                        <div className="col-4 blank"></div>
                        <div className="col-4 blank"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4 blank"></div>
                        <div className="col-4 blank"></div>
                        <div className="col-4 blank"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyAccount;