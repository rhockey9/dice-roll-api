import {Router, Request, Response, NextFunction} from 'express';
import {DiceRoll, DiceType} from '@cragi9/dice-roll/dist';
//import {DiceRoll, DiceType} from '../../../dice-roll/dist';
import {RollResult} from '../models/RollResult';

export class DiceGameRouter {
  router: Router

  /**
   * Initialize the DiceGameRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public rollTheDice(req: Request, res: Response, next: NextFunction) {
    let guess = req.params.guess;
    let win: boolean = false;
    
    let diceRoll : DiceRoll = new DiceRoll(DiceType.Standard);
    let valid: boolean = diceRoll.verifyDiceValue(guess);

    if(valid){
        let roll: number = diceRoll.rollDie();

        if(guess == roll)
        {
            win = true;
        }

        var rollResult : RollResult = {Win: win, Guess: guess, Roll: roll, User: "craig"};
        res.send(rollResult);
    }
    else{
        res.send(false);
    }    
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/:guess', this.rollTheDice);
  }

}

// Create the DiceGameRouter, and export its configured Express.Router
const diceGameRoutes = new DiceGameRouter();
diceGameRoutes.init();

export default diceGameRoutes.router;