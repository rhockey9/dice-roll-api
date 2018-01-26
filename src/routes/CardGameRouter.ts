import {Router, Request, Response, NextFunction} from 'express';
import {CardDeck, DeckType, Card} from '@cragi9/card-deck/dist';
//import {CardDeck, DeckType, Card} from '../../../../TypeScript/card-deck/master/dist';
//import { CardProperties } from '../../../../TypeScript/card-deck/master/dist/models/CardProperties';
//import { DeckType } from '../../../../TypeScript/card-deck/master/dist/models/DeckType';

export class CardGameRouter {
  router: Router
  deck: CardDeck

  //private _deck: CardDeck;

  /**
   * Initialize the CardGameRouter
   */
  constructor() {
    this.router = Router();
    this.deck = new CardDeck(DeckType.Standard)
    this.init();
  }

  /**
   * GET a card.
   */
  public DrawACard(req: Request, res: Response, next: NextFunction) {
    //let guess = req.params.guess;
    //let win: boolean = false;
    
    let cardDeck : CardDeck = new CardDeck(DeckType.Standard);
    
    let draw: Card = cardDeck.DrawCard();

    res.send(JSON.stringify(draw.ToString()));   
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.DrawACard);
  }

}

// Create the DiceGameRouter, and export its configured Express.Router
const cardGameRoutes = new CardGameRouter();
cardGameRoutes.init();

export default cardGameRoutes.router;