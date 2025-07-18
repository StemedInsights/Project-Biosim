import { apiRequest } from "./utils";

export async function apBioContent() {
    const unitJSON = await apiRequest('service/ap-bio')

    let units = [
        {
            title: 'Unit 1: Chemistry of Life',
            topics: [
                { name: 'Structure of Water and Hydrogen Bonding', content: assignContent("1.1", unitJSON) },
                { name: 'Elements of Life',                        content: assignContent("1.2", unitJSON) },
                { name: 'Introduction to Macromolecules',          content: assignContent("1.3", unitJSON) },
                { name: 'Carbohydrates',                           content: assignContent("1.4", unitJSON) },
                { name: 'Lipids',                                  content: assignContent("1.5", unitJSON) },
                { name: 'Nucleic Acids',                           content: assignContent("1.6", unitJSON) },
                { name: 'Proteins',                                content: assignContent("1.7", unitJSON) },
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