Module['glm'] = Module['glm'] || {};
Module['mud']['ui'] = Module['mud']['ui'] || {};
Module['mud'] = Module['mud'] || {};
Module['mud']['gfx'] = Module['mud']['gfx'] || {};
Module['toy'] = Module['toy'] || {};

(function() {
    function setup() {
    }
    if (Module['calledRun']) setup();
    else addOnPreMain(setup);
})();
