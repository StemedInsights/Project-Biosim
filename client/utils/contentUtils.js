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
                { name: 'Cell Structure and Function',             content: assignContent("2.1", unitJSON) },
                { name: 'Cell Size',                               content: assignContent("2.2", unitJSON) },
                { name: 'Plasma Membrane',                         content: assignContent("2.3", unitJSON) },
                { name: 'Membrane Permeability',                   content: assignContent("2.4", unitJSON) },
                { name: 'Membrane Transport',                      content: assignContent("2.5", unitJSON) },
                { name: 'Facilitated Diffusion',                   content: assignContent("2.6", unitJSON) },
                { name: 'Tonicity and Osmoregulation',             content: assignContent("2.7", unitJSON) },
                { name: 'Mechanisms of Transport',                 content: assignContent("2.8", unitJSON) },
                { name: 'Cell Compartmentalization',               content: assignContent("2.9", unitJSON) },
                { name: 'Origins of Cell Compartmentalization',    content: assignContent("2.10", unitJSON) },
            ]
        },
        
        /*
            '2.9: Cell Compartmentalization',
            '2.10: Origins of Cell Compartmentalization',
        */
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