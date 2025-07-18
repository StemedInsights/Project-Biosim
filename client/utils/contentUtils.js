import { apiRequest } from "./utils";

export async function apBioContent() {
    const unitJSON = await apiRequest('service/ap-bio')

    let units = [
        {
            title: 'Unit 1: Chemistry of Life',
            topics: [
                { name: 'Structure of Water and Hydrogen Bonding', content: assignContent("1.1", unitJSON) },
                { name: 'Properties of Water', content: 'Details on cohesion, adhesion, and polarity.' },
                { name: 'Macromolecules', content: 'Information on carbs, lipids, proteins, and nucleic acids.' },
                { name: 'Nucleic Acids', content: 'How DNA and RNA store genetic information.' }
            ]
        },
        {
            title: 'Unit 2: Cell Structure and Function',
            topics: [
                { name: 'Cell Organelles', content: 'Functions of organelles like mitochondria and ER.' },
                { name: 'Membrane Transport', content: 'Osmosis, diffusion, and active transport.' },
                { name: 'Surface Area to Volume', content: 'Why cell size matters.' }
            ]
        },
        // Additional units...
    ];

    return units
}


function assignContent(unit, unitJSON) {
    let returnElement = 'No content available for this unit.'
    unitJSON.forEach(element => {
        console.log("Title", element.title)
        if (element.title == unit) {
            returnElement = element.content
        }
    });

    return returnElement;
}