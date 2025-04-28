export interface PokemonList {
    id: number,
    name: string,
    img: string,
    hp: number,
    atk: number,
    def: number,
    spAtk: number,
    spDef: number,
    xp: number,
    type: types[],
    abilities: Ability[]
}

export interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export interface types {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
