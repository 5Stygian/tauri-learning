let ELEMENTS: Element[] = [];

class Element {
    [x: string|number]: string|number;
    public constructor({name, symbol, family, atomicNumber, group, period}: {
        name: string,
        symbol: string,
        family: string,
        atomicNumber: number,
        group: number,
        period: number,
    }
    ) {
        this.name = name;
        this.symbol = symbol;
        this.family = family;
        this.atomicNumber = atomicNumber;
        this.group = group;
        this.period = period;

        ELEMENTS.push(this);
    }
}

export const NaE: Element = new Element({name: "NaE", symbol: "NaE", family: "NaE", atomicNumber: -1, group: -1, period: -1});

// period 1
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 1, group: 1, period: 1});
export const Helium: Element   = new Element({name: "Helium", symbol: "He", family: "nobleGas", atomicNumber: 2, group: 18, period: 1});

// period 2
export const Lithium: Element   = new Element({name: "Lithium", symbol: "Li", family: "alkaliMetal", atomicNumber: 3, group: 1, period: 2});
export const Beryllium: Element = new Element({name: "Beryllium", symbol: "Be", family: "alkalineEarthMetal", atomicNumber: 4, group: 2, period: 2});
export const Boron: Element     = new Element({name: "Boron", symbol: "B", family: "metalloid", atomicNumber: 5, group: 13, period: 2});
export const Carbon: Element    = new Element({name: "Carbon", symbol: "C", family: "nonmetal", atomicNumber: 6, group: 14, period: 2});
export const Nitrogen: Element  = new Element({name: "Nitrogen", symbol: "N", family: "nonmetal", atomicNumber: 7, group: 15, period: 2});
export const Oxygen: Element    = new Element({name: "Oxygen", symbol: "O", family: "nonmetal", atomicNumber: 8, group: 16, period: 2});
export const Fluorine: Element  = new Element({name: "Fluorine", symbol: "F", family: "halogen", atomicNumber: 9, group: 17, period: 2});
export const Neon: Element      = new Element({name: "Neon", symbol: "Ne", family: "nobleGas", atomicNumber: 10, group: 18, period: 2});

// period 3
export const Sodium: Element     = new Element({name: "Sodium", symbol: "Na", family: "alkaliMetal", atomicNumber: 11, group: 1, period: 3});
export const Magnesium: Element  = new Element({name: "Magnesium", symbol: "Mg", family: "alkalineEarthMetal", atomicNumber: 12, group: 2, period: 3});
export const Aluminum: Element   = new Element({name: "Aluminum", symbol: "Al", family: "postTransitionMetal", atomicNumber: 13, group: 13, period: 3});
export const Silicon: Element    = new Element({name: "Silicon", symbol: "Si", family: "metalloid", atomicNumber: 14, group: 14, period: 3});
export const Phosphorus: Element = new Element({name: "Phosphorus", symbol: "P", family: "nonmetal", atomicNumber: 15, group: 15, period: 3});
export const Sulfur: Element     = new Element({name: "Sulfur", symbol: "S", family: "nonmetal", atomicNumber: 16, group: 16, period: 3});
export const Chlorine: Element   = new Element({name: "Chlorine", symbol: "Cl", family: "halogen", atomicNumber: 17, group: 17, period: 3});
export const Argon: Element      = new Element({name: "Argon", symbol: "Ar", family: "nobleGas", atomicNumber: 18, group: 18, period: 3});

// period 4
export const Potassium: Element = new Element({name: "Potassium", symbol: "K", family: "alkaliMetal", atomicNumber: 19, group: 1, period: 4});
export const Calcium: Element   = new Element({name: "Calcium", symbol: "Ca", family: "alkalineEarthMetal", atomicNumber: 20, group: 2, period: 4});
export const Scandium: Element  = new Element({name: "Scandium", symbol: "Sc", family: "transitionMetal", atomicNumber: 21, group: 3, period: 4});
export const Titanium: Element  = new Element({name: "Titanium", symbol: "Ti", family: "transitionMetal", atomicNumber: 22, group: 4, period: 4});
export const Vandium: Element   = new Element({name: "Vandium", symbol: "V", family: "transitionMetal", atomicNumber: 23, group: 5, period: 4});
export const Chromium: Element  = new Element({name: "Chromium", symbol: "Cr", family: "transitionMetal", atomicNumber: 24, group: 6, period: 4});
export const Manganese: Element = new Element({name: "Manganese", symbol: "Mn", family: "transitionMetal", atomicNumber: 25, group: 7, period: 4});
export const Iron: Element      = new Element({name: "Iron", symbol: "Fe", family: "transitionMetal", atomicNumber: 26, group: 8, period: 4});
export const Cobalt: Element    = new Element({name: "Cobalt", symbol: "Co", family: "transitionMetal", atomicNumber: 27, group: 9, period: 4});
export const Nickel: Element    = new Element({name: "Nickel", symbol: "Ni", family: "transitionMetal", atomicNumber: 28, group: 10, period: 4});
export const Copper: Element    = new Element({name: "Calcium", symbol: "Ca", family: "transitionMetal", atomicNumber: 29, group: 11, period: 4});
export const Zinc: Element      = new Element({name: "Zinc", symbol: "Zn", family: "transitionMetal", atomicNumber: 30, group: 12, period: 4});
export const Gallium: Element   = new Element({name: "Gallium", symbol: "Ga", family: "postTransitionMetal", atomicNumber: 31, group: 13, period: 4});
export const Germanium: Element = new Element({name: "Germanium", symbol: "Ge", family: "metalloid", atomicNumber: 32, group: 14, period: 4});
export const Arsenic: Element   = new Element({name: "Arsenic", symbol: "As", family: "metalloid", atomicNumber: 33, group: 15, period: 4});
export const Selenium: Element  = new Element({name: "Selenium", symbol: "Se", family: "nonmetal", atomicNumber: 34, group: 16, period: 4});
export const Bromine: Element   = new Element({name: "Bromine", symbol: "Br", family: "halogen", atomicNumber: 35, group: 17, period: 4});
export const Krypton: Element   = new Element({name: "Krypton", symbol: "Kr", family: "nobleGas", atomicNumber: 36, group: 18, period: 4});

export default ELEMENTS;