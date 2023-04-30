import { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { messageService } from '../../logic/iteration';
import { LocalStorageKeys } from '../../logic/localStorage';
import { calculateIngredientsCost, calculateWorkerCost, formatNumber } from '../../logic/money';
import { calculateNextDeliveryProfit } from '../../logic/beerDelivery';

const Money = () => {
  const [amount, setAmount] = useState(Number(localStorage.getItem(LocalStorageKeys.BALANCE)) || 0);
  const [ingCost, setIngCost] = useState(calculateIngredientsCost());
  const [nextProfit, setNextProfit] = useState(calculateNextDeliveryProfit());
  const [workerCost, setWorkerCost] = useState(calculateWorkerCost());
  useEffect(() => {
    messageService.getMessage().subscribe(() => {
      setAmount(Number(localStorage.getItem(LocalStorageKeys.BALANCE)));
      setIngCost(calculateIngredientsCost());
      setWorkerCost(calculateWorkerCost());
      setNextProfit(calculateNextDeliveryProfit());
    });
  }, []);

  return (
    <Card className="money-card">
      <Card.Body>
        <Card.Title>Statistic</Card.Title>
      </Card.Body>
      <Card.Text>
        <ListGroup>
          <ListGroupItem>
            <span className="pe-2">Next Beer Delivery Income:</span>
            <span>{formatNumber(nextProfit)}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="pe-2">Costs Beer Ingredients:</span>
            <span>- {formatNumber(ingCost)}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="pe-2">Costs Worker:</span>
            <span>- {formatNumber(workerCost)}</span>
          </ListGroupItem>
          <ListGroupItem className="stat-balance">
            <span className="pe-2">Balance:</span>
            <span>{formatNumber(amount)}</span>
          </ListGroupItem>
        </ListGroup>
      </Card.Text>
    </Card>
  );
};

export default Money;
