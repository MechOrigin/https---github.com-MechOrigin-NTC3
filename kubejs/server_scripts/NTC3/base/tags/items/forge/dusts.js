//priority: 200

// Listen to item tag event
onEvent('tags.items', event => {

    var itemsToRemove = [];

    elementsToUnify.forEach((material) => {

        let dustThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_dust`)).id;
        //let dustImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:dust_${material}`)).id;
        let dustMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:dust_${material}`)).id;
        let dustBiggerReactor = getPreferredItemInTag(Ingredient.of(`biggerreactors:${material}_dust`)).id;

        let plateThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_plate`)).id;
        //let plateImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:plate_${material}`)).id;

        let gearThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_gear`)).id;

        let nuggetThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_nugget`)).id;
        //let nuggetImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:nugget_${material}`)).id;
        let nuggetMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:nugget_${material}`)).id;
        let nuggetTconstruct = getPreferredItemInTag(Ingredient.of(`tconstruct:${material}_nugget`)).id;
        let nuggetMinecraft = getPreferredItemInTag(Ingredient.of(`minecraft:${material}_nugget`)).id;

        let ingotThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_ingot`)).id;
        //let ingotImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:ingot_${material}`)).id;
        let ingotMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:ingot_${material}`)).id;
        let ingotBiggerReactor = getPreferredItemInTag(Ingredient.of(`biggerreactors:${material}_ingot`)).id;
        let ingotBeyondEarth = getPreferredItemInTag(Ingredient.of(`beyond_earth:${material}_ingot`)).id;
        //let ingotMinecraft = getPreferredItemInTag(Ingredient.of(`minecraft:${material}_ingot`)).id;

        let rawThermal = getPreferredItemInTag(Ingredient.of(`thermal:raw_${material}`)).id;
        //let rawImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:raw_${material}`)).id;
        let rawMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:raw_${material}`)).id;

        //let rodImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:stick_${material}`)).id;

        if (material == air) {return;}

        itemsToRemove.push(
            // [`forge:dusts/${material}`, 'immersiveengineering:ingot_' + material],
            // 'immersiveengineering:dust_' + material,
            // 'immersiveengineering:nugget_' + material,
            // 'immersiveengineering:stick_' + material,
            // 'mekanism:nugget_' + material,
            // 'mekanism:dust_' + material,
            // 'mekanism:ingot_' + material,
            // 'mekanism:block_' + material,
            // 'thermal:' + material + '_block',
            dustThermal,
            //dustImmersive,
            dustMekanism,
            plateThermal,
            gearThermal,
            nuggetThermal,
            ingotThermal,
            // rawThermal,
            // plateImmersive,
            // nuggetImmersive,
            // ingotImmersive,
            // rawImmersive,
            nuggetMekanism,
            ingotMekanism,
            rawMekanism,
            //rodImmersive,
            dustBiggerReactor,
            ingotBiggerReactor,
            nuggetTconstruct,
            ingotBeyondEarth,
            nuggetMinecraft
            //ingotMinecraft,
        );
    });

    alloysToUnify.forEach((material) => {

        let dustThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_dust`)).id;
        //let dustImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:dust_${material}`)).id;
        let dustMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:dust_${material}`)).id;

        let plateThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_plate`)).id;
        //let plateImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:plate_${material}`)).id;

        let gearThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_gear`)).id;

        let nuggetThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_nugget`)).id;
        let nuggetMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:nugget_${material}`)).id;
        //let nuggetImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:nugget_${material}`)).id;
        let nuggetTconstruct = getPreferredItemInTag(Ingredient.of(`tconstruct:${material}_nugget`)).id;

        let ingotThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_ingot`)).id;
        let ingotMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:ingot_${material}`)).id;
        //let ingotImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:ingot_${material}`)).id;
        let ingotTconstruct = getPreferredItemInTag(Ingredient.of(`tconstruct:${material}_ingot`)).id;
        let ingotBeyondEarth = getPreferredItemInTag(Ingredient.of(`beyond_earth:${material}_ingot`)).id;

        //let rodImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:stick_${material}`)).id;


        if (material == air) {return;}

        itemsToRemove.push(
            dustThermal,
            // dustImmersive,
            dustMekanism,
            plateThermal,
            gearThermal,
            nuggetThermal,
            ingotThermal,
            // plateImmersive,
            // nuggetImmersive,
            // ingotImmersive,
            nuggetMekanism,
            ingotMekanism,
            //rodImmersive,
            nuggetTconstruct,
            ingotTconstruct,
            ingotBeyondEarth
        );
    });

    itemsToRemove.forEach(disabledItem => {
        if (disabledItem == air) {return;}

        var blacklistedMaterials = [
            // 'netherite',
            // 'enderium',
            // 'signalum',
            // 'lumium'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == disabledItem) {
                return;
            }
        }

        //console.log(`${disabledItem}`);
            // event.remove('forge:dusts', disabledItem);
            // event.remove(('forge:dusts'+'/'+`${disabledItem.replace(':', '').replace('thermal', '').replace('_dust', '')}`), disabledItem);
            
            event.removeAllTagsFrom(disabledItem);
        });

    event.remove([]);

    event.removeAllTagsFrom('thermal:niter_dust');
    event.removeAllTagsFrom('thermal:ender_pearl_dust');

    event.removeAllTagsFrom('thermal:niter');
    event.removeAllTagsFrom('thermal:cinnabar');
    event.removeAllTagsFrom('thermal:sulfur');

    // event.removeAllTagsFrom('immersiveengineering:ingot_aluminum');
    // event.removeAllTagsFrom('immersiveengineering:nugget_aluminum');
    // event.removeAllTagsFrom('immersiveengineering:raw_aluminum');
    // event.removeAllTagsFrom('immersiveengineering:plate_aluminum');
    // event.removeAllTagsFrom('immersiveengineering:dust_aluminum');
    // event.removeAllTagsFrom('immersiveengineering:stick_aluminum');

    // event.removeAllTagsFrom('immersiveengineering:ingot_uranium');
    // event.removeAllTagsFrom('immersiveengineering:nugget_uranium');
    // event.removeAllTagsFrom('immersiveengineering:raw_uranium');
    // event.removeAllTagsFrom('immersiveengineering:plate_uranium');
    // event.removeAllTagsFrom('immersiveengineering:dust_uranium');
    // event.removeAllTagsFrom('immersiveengineering:stick_uranium');

    // event.removeAllTagsFrom('immersiveengineering:stick_steel');
    // event.removeAllTagsFrom('immersiveengineering:stick_iron');

    event.removeAllTagsFrom('mekanism:dust_lapis_lazuli');
    event.removeAllTagsFrom('mekanism:dust_charcoal');
    event.removeAllTagsFrom('mekanism:dust_obsidian');
    event.removeAllTagsFrom('mekanism:dust_osmium');
    event.removeAllTagsFrom('mekanism:dust_uranium');

    event.removeAllTagsFrom('biggerreactors:uranium_dust');
    event.removeAllTagsFrom('biggerreactors:uranium_ingot');
  })