import React from 'react';
import { useSelector } from 'react-redux';
import priceConverter from '@/utils/priceConverter';


const OtherCommissions = () => {
  const { user } = useSelector(state => state.user);
  return (
    <div className="custom-row my-4">
      <div className="custom-col my-4">
        <div className="custom-card my-4">
          <div className="custom-card-header">
            <h1>My Earning</h1>
            <h1>${priceConverter(user?.earnings)}</h1>
          </div>
          <div className="custom-card-body">
            <div className="custom-card-item">
              <div>Jackpot Fund</div>
              <div>{user?.jackpotEarnings}</div>
            </div>
            <div className="custom-card-item">
              <div>Referral Commission</div>
              <div>{user?.commissionEarnings}</div>
            </div>
            <div className="custom-card-item">
              <div>Leader Bonus</div>
              <div>{user?.leaderboardEarnings}</div>
            </div>
            <div className="custom-card-item">
              <div>Premium User Bonus</div>
              <div>{user?.founder}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherCommissions;
