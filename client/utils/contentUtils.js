import { apiRequest } from "./utils";

export async function apBioContent() {
    const unitJSON = await apiRequest('service/ap-bio')

    let units = [
        {
            title: 'Unit 1: Chemistry of Life',
            topics: [
                { name: 'Structure of Water and Hydrogen Bonding',   content: assignContent("1.1", unitJSON) },
                { name: 'Elements of Life',                          content: assignContent("1.2", unitJSON) },
                { name: 'Introduction to Macromolecules',            content: assignContent("1.3", unitJSON) },
                { name: 'Carbohydrates',                             content: assignContent("1.4", unitJSON) },
                { name: 'Lipids',                                    content: assignContent("1.5", unitJSON) },
                { name: 'Nucleic Acids',                             content: assignContent("1.6", unitJSON) },
                { name: 'Proteins',                                  content: assignContent("1.7", unitJSON) },
            ]
        },
        {
            title: 'Unit 2: Cell Structure and Function',
            topics: [
                { name: 'Cell Structure and Function',               content: assignContent("2.1", unitJSON) },
                { name: 'Cell Size',                                 content: assignContent("2.2", unitJSON) },
                { name: 'Plasma Membrane',                           content: assignContent("2.3", unitJSON) },
                { name: 'Membrane Permeability',                     content: assignContent("2.4", unitJSON) },
                { name: 'Membrane Transport',                        content: assignContent("2.5", unitJSON) },
                { name: 'Facilitated Diffusion',                     content: assignContent("2.6", unitJSON) },
                { name: 'Tonicity and Osmoregulation',               content: assignContent("2.7", unitJSON) },
                { name: 'Mechanisms of Transport',                   content: assignContent("2.8", unitJSON) },
                { name: 'Cell Compartmentalization',                 content: assignContent("2.9", unitJSON) },
                { name: 'Origins of Cell Compartmentalization',      content: assignContent("2.10", unitJSON) },
            ]
        },
        {
            title: 'Unit 3: Ceullular Energetics',
            topics: [
                { name: 'Enzyme',                                    content: assignContent("3.1", unitJSON) },
                { name: 'Environmental Impacts on Enzyme Function',  content: assignContent("3.2", unitJSON) },
                { name: 'Cellular Energy',                           content: assignContent("3.3", unitJSON) },
                { name: 'Photosynthesis',                            content: assignContent("3.4", unitJSON) },
                { name: 'Cellular Respiration',                      content: assignContent("3.5", unitJSON) },
            ]
        },
        {
            title: 'Unit 4: Cell Communication and Cell Cycle',
            topics: [
                { name: 'Cell Communication',                        content: assignContent("4.1", unitJSON) },
                { name: 'Introduction to Signal Transduction',       content: assignContent("4.2", unitJSON) },
                { name: 'Signal Transduction Pathways',              content: assignContent("4.3", unitJSON) },
                { name: 'Feedback',                                  content: assignContent("4.4", unitJSON) },
                { name: 'Cell Cycle',                                content: assignContent("4.5", unitJSON) },
                { name: 'Regulation of the Cell Cycle',              content: assignContent("4.6", unitJSON) },
            ]
        },
        {
            title: 'Unit 5: Heredity',
            topics: [
                { name: 'Meiosis',                                   content: assignContent("5.1", unitJSON) },
                { name: 'Meiosis and Genetic Diversity',             content: assignContent("5.2", unitJSON) },
                { name: 'Mendelian Genetics',                        content: assignContent("5.3", unitJSON) },
                { name: 'Non-Mendelian Genetics',                    content: assignContent("5.4", unitJSON) },
                { name: 'Environmental Effects on Phenotype',        content: assignContent("5.5", unitJSON) },
            ]
        },
        
        /*
            '5.1: Meiosis', 
            '5.2: Meiosis and Genetic Diversity', 
            '5.3: Mendelian Genetics', 
            '5.4: Non-Mendelian Genetics', 
            '5.5: Environmental Effects on Phenotype', 
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