import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "KoinosGarden";
  export const SYMBOL: string = "KG";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 1000;
  export const URI: string = "ipfs://bafybeiebwiddhpk3km3gjkau6qiklnhsv2ccuh2w52e7m5hqq6ipja3g2i";
  export const OWNER: Uint8Array = Base58.decode("1MJUUXcKV7s1bYUqPSJ5NoMoAe4zQ4J1My");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1MJUUXcKV7s1bYUqPSJ5NoMoAe4zQ4J1My");
}