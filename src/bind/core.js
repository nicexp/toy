Module['stl'] = Module['stl'] || {};
Module['mud'] = Module['mud'] || {};
// BulletMedium
function BulletMedium() { throw "cannot construct a BulletMedium, no constructor in IDL" }
BulletMedium.prototype = Object.create(WrapperObject.prototype);
BulletMedium.prototype.constructor = BulletMedium;
BulletMedium.prototype.__class__ = BulletMedium;
BulletMedium.__cache__ = {};
Module['BulletMedium'] = BulletMedium;
BulletMedium.prototype["__destroy__"] = BulletMedium.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_BulletMedium__destroy(self);
};
// BulletShape
function BulletShape() { throw "cannot construct a BulletShape, no constructor in IDL" }
BulletShape.prototype = Object.create(WrapperObject.prototype);
BulletShape.prototype.constructor = BulletShape;
BulletShape.prototype.__class__ = BulletShape;
BulletShape.__cache__ = {};
Module['BulletShape'] = BulletShape;
BulletShape.prototype["__destroy__"] = BulletShape.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_BulletShape__destroy(self);
};
// Camera
function Camera(a0, a1, a2) {
    if (a0 === undefined) { this.ptr = _toy_Camera__construct_0(); this.type = Camera; getCache(Camera)[this.ptr] = this; return; }
    if (a1 === undefined) { this.ptr = _toy_Camera__construct_1(/*distance*/a0); this.type = Camera; getCache(Camera)[this.ptr] = this; return; }
    if (a2 === undefined) { this.ptr = _toy_Camera__construct_2(/*distance*/a0, /*near*/a1); this.type = Camera; getCache(Camera)[this.ptr] = this; return; }
    this.ptr = _toy_Camera__construct_3(/*distance*/a0, /*near*/a1, /*far*/a2); this.type = Camera; getCache(Camera)[this.ptr] = this;
};
Camera.prototype = Object.create(WrapperObject.prototype);
Camera.prototype.constructor = Camera;
Camera.prototype.__class__ = Camera;
Camera.__cache__ = {};
Module['Camera'] = Camera;
Object.defineProperty(Camera.prototype, "lens_distance", {
    get: function() {
        var self = this.ptr;
        return _toy_Camera__get_lens_distance(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Camera__set_lens_distance(self, value);
    }
});
Object.defineProperty(Camera.prototype, "lens_angle", {
    get: function() {
        var self = this.ptr;
        return _toy_Camera__get_lens_angle(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Camera__set_lens_angle(self, value);
    }
});
Object.defineProperty(Camera.prototype, "near", {
    get: function() {
        var self = this.ptr;
        return _toy_Camera__get_near(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Camera__set_near(self, value);
    }
});
Object.defineProperty(Camera.prototype, "far", {
    get: function() {
        var self = this.ptr;
        return _toy_Camera__get_far(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Camera__set_far(self, value);
    }
});
Object.defineProperty(Camera.prototype, "aspect", {
    get: function() {
        var self = this.ptr;
        return _toy_Camera__get_aspect(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Camera__set_aspect(self, value);
    }
});
Camera.prototype["__destroy__"] = Camera.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Camera__destroy(self);
};
// Collider
function Collider(a0, a1, a2, a3, a4) {
    if (a0 === undefined) { this.ptr = _toy_Collider__construct_0(); this.type = Collider; getCache(Collider)[this.ptr] = this; return; }
    this.ptr = _toy_Collider__construct_5(/*spatial*/a0.ptr, /*movable*/a1.ptr, /*collision_shape*/a2.ptr, /*medium*/a3.ptr, /*group*/a4); this.type = Collider; getCache(Collider)[this.ptr] = this;
};
Collider.prototype = Object.create(WrapperObject.prototype);
Collider.prototype.constructor = Collider;
Collider.prototype.__class__ = Collider;
Collider.__cache__ = {};
Module['Collider'] = Collider;
Object.defineProperty(Collider.prototype, "spatial", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Collider__get_spatial(self), ComponentHandle_toy_Spatial);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Collider__set_spatial(self, value.ptr);
    }
});
Object.defineProperty(Collider.prototype, "movable", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Collider__get_movable(self), ComponentHandle_toy_Movable);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Collider__set_movable(self, value.ptr);
    }
});
Object.defineProperty(Collider.prototype, "collision_shape", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Collider__get_collision_shape(self), CollisionShape);
    }});
Object.defineProperty(Collider.prototype, "medium", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Collider__get_medium(self), Medium);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Collider__set_medium(self, value.ptr);
    }
});
Object.defineProperty(Collider.prototype, "group", {
    get: function() {
        var self = this.ptr;
        return _toy_Collider__get_group(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Collider__set_group(self, value);
    }
});
Object.defineProperty(Collider.prototype, "object", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Collider__get_object(self), ColliderObject);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Collider__set_object(self, value.ptr);
    }
});
Object.defineProperty(Collider.prototype, "impl", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Collider__get_impl(self), ColliderImpl);
    }});
Collider.prototype["__destroy__"] = Collider.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Collider__destroy(self);
};
// ColliderImpl
function ColliderImpl() { throw "cannot construct a ColliderImpl, no constructor in IDL" }
ColliderImpl.prototype = Object.create(WrapperObject.prototype);
ColliderImpl.prototype.constructor = ColliderImpl;
ColliderImpl.prototype.__class__ = ColliderImpl;
ColliderImpl.__cache__ = {};
Module['ColliderImpl'] = ColliderImpl;
ColliderImpl.prototype["__destroy__"] = ColliderImpl.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_ColliderImpl__destroy(self);
};
// ColliderObject
function ColliderObject() { throw "cannot construct a ColliderObject, no constructor in IDL" }
ColliderObject.prototype = Object.create(WrapperObject.prototype);
ColliderObject.prototype.constructor = ColliderObject;
ColliderObject.prototype.__class__ = ColliderObject;
ColliderObject.__cache__ = {};
Module['ColliderObject'] = ColliderObject;
ColliderObject.prototype["__destroy__"] = ColliderObject.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_ColliderObject__destroy(self);
};
// Collision
function Collision() {
    this.ptr = _toy_Collision__construct_0(); this.type = Collision; getCache(Collision)[this.ptr] = this;
};
Collision.prototype = Object.create(WrapperObject.prototype);
Collision.prototype.constructor = Collision;
Collision.prototype.__class__ = Collision;
Collision.__cache__ = {};
Module['Collision'] = Collision;
Object.defineProperty(Collision.prototype, "first", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Collision__get_first(self), SparseHandle_toy_Collider);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Collision__set_first(self, value.ptr);
    }
});
Object.defineProperty(Collision.prototype, "second", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Collision__get_second(self), SparseHandle_toy_Collider);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Collision__set_second(self, value.ptr);
    }
});
Object.defineProperty(Collision.prototype, "hit_point", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Collision__get_hit_point(self), v3_float);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Collision__set_hit_point(self, value.ptr);
    }
});
Collision.prototype["__destroy__"] = Collision.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Collision__destroy(self);
};
// CollisionShape
function CollisionShape(a0, a1, a2) {
    if (a0 === undefined) { this.ptr = _toy_CollisionShape__construct_0(); this.type = CollisionShape; getCache(CollisionShape)[this.ptr] = this; return; }
    if (a1 === undefined) { this.ptr = _toy_CollisionShape__construct_1(/*shape*/a0.ptr); this.type = CollisionShape; getCache(CollisionShape)[this.ptr] = this; return; }
    if (a2 === undefined) { this.ptr = _toy_CollisionShape__construct_2(/*shape*/a0.ptr, /*center*/a1.ptr); this.type = CollisionShape; getCache(CollisionShape)[this.ptr] = this; return; }
    this.ptr = _toy_CollisionShape__construct_3(/*shape*/a0.ptr, /*center*/a1.ptr, /*margin*/a2); this.type = CollisionShape; getCache(CollisionShape)[this.ptr] = this;
};
CollisionShape.prototype = Object.create(WrapperObject.prototype);
CollisionShape.prototype.constructor = CollisionShape;
CollisionShape.prototype.__class__ = CollisionShape;
CollisionShape.__cache__ = {};
Module['CollisionShape'] = CollisionShape;
CollisionShape.prototype["__destroy__"] = CollisionShape.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_CollisionShape__destroy(self);
};
// ComponentHandle<toy::Camera>
function ComponentHandle_toy_Camera() {
    this.ptr = _mud_ComponentHandle_toy_Camera__construct_0(); this.type = ComponentHandle_toy_Camera; getCache(ComponentHandle_toy_Camera)[this.ptr] = this;
};
ComponentHandle_toy_Camera.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Camera.prototype.constructor = ComponentHandle_toy_Camera;
ComponentHandle_toy_Camera.prototype.__class__ = ComponentHandle_toy_Camera;
ComponentHandle_toy_Camera.__cache__ = {};
Module['mud']['ComponentHandle_toy_Camera'] = ComponentHandle_toy_Camera;
ComponentHandle_toy_Camera.prototype["__destroy__"] = ComponentHandle_toy_Camera.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_Camera__destroy(self);
};
// ComponentHandle<toy::Emitter>
function ComponentHandle_toy_Emitter() {
    this.ptr = _mud_ComponentHandle_toy_Emitter__construct_0(); this.type = ComponentHandle_toy_Emitter; getCache(ComponentHandle_toy_Emitter)[this.ptr] = this;
};
ComponentHandle_toy_Emitter.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Emitter.prototype.constructor = ComponentHandle_toy_Emitter;
ComponentHandle_toy_Emitter.prototype.__class__ = ComponentHandle_toy_Emitter;
ComponentHandle_toy_Emitter.__cache__ = {};
Module['mud']['ComponentHandle_toy_Emitter'] = ComponentHandle_toy_Emitter;
ComponentHandle_toy_Emitter.prototype["__destroy__"] = ComponentHandle_toy_Emitter.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_Emitter__destroy(self);
};
// ComponentHandle<toy::EntityScript>
function ComponentHandle_toy_EntityScript() {
    this.ptr = _mud_ComponentHandle_toy_EntityScript__construct_0(); this.type = ComponentHandle_toy_EntityScript; getCache(ComponentHandle_toy_EntityScript)[this.ptr] = this;
};
ComponentHandle_toy_EntityScript.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_EntityScript.prototype.constructor = ComponentHandle_toy_EntityScript;
ComponentHandle_toy_EntityScript.prototype.__class__ = ComponentHandle_toy_EntityScript;
ComponentHandle_toy_EntityScript.__cache__ = {};
Module['mud']['ComponentHandle_toy_EntityScript'] = ComponentHandle_toy_EntityScript;
ComponentHandle_toy_EntityScript.prototype["__destroy__"] = ComponentHandle_toy_EntityScript.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_EntityScript__destroy(self);
};
// ComponentHandle<toy::Movable>
function ComponentHandle_toy_Movable() {
    this.ptr = _mud_ComponentHandle_toy_Movable__construct_0(); this.type = ComponentHandle_toy_Movable; getCache(ComponentHandle_toy_Movable)[this.ptr] = this;
};
ComponentHandle_toy_Movable.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Movable.prototype.constructor = ComponentHandle_toy_Movable;
ComponentHandle_toy_Movable.prototype.__class__ = ComponentHandle_toy_Movable;
ComponentHandle_toy_Movable.__cache__ = {};
Module['mud']['ComponentHandle_toy_Movable'] = ComponentHandle_toy_Movable;
ComponentHandle_toy_Movable.prototype["__destroy__"] = ComponentHandle_toy_Movable.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_Movable__destroy(self);
};
// ComponentHandle<toy::Navblock>
function ComponentHandle_toy_Navblock() {
    this.ptr = _mud_ComponentHandle_toy_Navblock__construct_0(); this.type = ComponentHandle_toy_Navblock; getCache(ComponentHandle_toy_Navblock)[this.ptr] = this;
};
ComponentHandle_toy_Navblock.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Navblock.prototype.constructor = ComponentHandle_toy_Navblock;
ComponentHandle_toy_Navblock.prototype.__class__ = ComponentHandle_toy_Navblock;
ComponentHandle_toy_Navblock.__cache__ = {};
Module['mud']['ComponentHandle_toy_Navblock'] = ComponentHandle_toy_Navblock;
ComponentHandle_toy_Navblock.prototype["__destroy__"] = ComponentHandle_toy_Navblock.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_Navblock__destroy(self);
};
// ComponentHandle<toy::Origin>
function ComponentHandle_toy_Origin() {
    this.ptr = _mud_ComponentHandle_toy_Origin__construct_0(); this.type = ComponentHandle_toy_Origin; getCache(ComponentHandle_toy_Origin)[this.ptr] = this;
};
ComponentHandle_toy_Origin.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Origin.prototype.constructor = ComponentHandle_toy_Origin;
ComponentHandle_toy_Origin.prototype.__class__ = ComponentHandle_toy_Origin;
ComponentHandle_toy_Origin.__cache__ = {};
Module['mud']['ComponentHandle_toy_Origin'] = ComponentHandle_toy_Origin;
ComponentHandle_toy_Origin.prototype["__destroy__"] = ComponentHandle_toy_Origin.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_Origin__destroy(self);
};
// ComponentHandle<toy::Receptor>
function ComponentHandle_toy_Receptor() {
    this.ptr = _mud_ComponentHandle_toy_Receptor__construct_0(); this.type = ComponentHandle_toy_Receptor; getCache(ComponentHandle_toy_Receptor)[this.ptr] = this;
};
ComponentHandle_toy_Receptor.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Receptor.prototype.constructor = ComponentHandle_toy_Receptor;
ComponentHandle_toy_Receptor.prototype.__class__ = ComponentHandle_toy_Receptor;
ComponentHandle_toy_Receptor.__cache__ = {};
Module['mud']['ComponentHandle_toy_Receptor'] = ComponentHandle_toy_Receptor;
ComponentHandle_toy_Receptor.prototype["__destroy__"] = ComponentHandle_toy_Receptor.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_Receptor__destroy(self);
};
// ComponentHandle<toy::Spatial>
function ComponentHandle_toy_Spatial() {
    this.ptr = _mud_ComponentHandle_toy_Spatial__construct_0(); this.type = ComponentHandle_toy_Spatial; getCache(ComponentHandle_toy_Spatial)[this.ptr] = this;
};
ComponentHandle_toy_Spatial.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Spatial.prototype.constructor = ComponentHandle_toy_Spatial;
ComponentHandle_toy_Spatial.prototype.__class__ = ComponentHandle_toy_Spatial;
ComponentHandle_toy_Spatial.__cache__ = {};
Module['mud']['ComponentHandle_toy_Spatial'] = ComponentHandle_toy_Spatial;
ComponentHandle_toy_Spatial.prototype["__destroy__"] = ComponentHandle_toy_Spatial.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_Spatial__destroy(self);
};
// ComponentHandle<toy::Waypoint>
function ComponentHandle_toy_Waypoint() {
    this.ptr = _mud_ComponentHandle_toy_Waypoint__construct_0(); this.type = ComponentHandle_toy_Waypoint; getCache(ComponentHandle_toy_Waypoint)[this.ptr] = this;
};
ComponentHandle_toy_Waypoint.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_Waypoint.prototype.constructor = ComponentHandle_toy_Waypoint;
ComponentHandle_toy_Waypoint.prototype.__class__ = ComponentHandle_toy_Waypoint;
ComponentHandle_toy_Waypoint.__cache__ = {};
Module['mud']['ComponentHandle_toy_Waypoint'] = ComponentHandle_toy_Waypoint;
ComponentHandle_toy_Waypoint.prototype["__destroy__"] = ComponentHandle_toy_Waypoint.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_Waypoint__destroy(self);
};
// ComponentHandle<toy::WorldPage>
function ComponentHandle_toy_WorldPage() {
    this.ptr = _mud_ComponentHandle_toy_WorldPage__construct_0(); this.type = ComponentHandle_toy_WorldPage; getCache(ComponentHandle_toy_WorldPage)[this.ptr] = this;
};
ComponentHandle_toy_WorldPage.prototype = Object.create(WrapperObject.prototype);
ComponentHandle_toy_WorldPage.prototype.constructor = ComponentHandle_toy_WorldPage;
ComponentHandle_toy_WorldPage.prototype.__class__ = ComponentHandle_toy_WorldPage;
ComponentHandle_toy_WorldPage.__cache__ = {};
Module['mud']['ComponentHandle_toy_WorldPage'] = ComponentHandle_toy_WorldPage;
ComponentHandle_toy_WorldPage.prototype["__destroy__"] = ComponentHandle_toy_WorldPage.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ComponentHandle_toy_WorldPage__destroy(self);
};
// ComponentPool
function ComponentPool() { throw "cannot construct a ComponentPool, no constructor in IDL" }
ComponentPool.prototype = Object.create(WrapperObject.prototype);
ComponentPool.prototype.constructor = ComponentPool;
ComponentPool.prototype.__class__ = ComponentPool;
ComponentPool.__cache__ = {};
Module['ComponentPool'] = ComponentPool;
ComponentPool.prototype["__destroy__"] = ComponentPool.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_ComponentPool__destroy(self);
};
// Core
function Core() { throw "cannot construct a Core, no constructor in IDL" }
Core.prototype = Object.create(WrapperObject.prototype);
Core.prototype.constructor = Core;
Core.prototype.__class__ = Core;
Core.__cache__ = {};
Module['Core'] = Core;
Core.prototype["__destroy__"] = Core.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Core__destroy(self);
};
// DefaultWorld
function DefaultWorld(a0, a1) {
    ensureCache.prepare();
    this.ptr = _toy_DefaultWorld__construct_2(ensureString(/*name*/a0), /*job_system*/a1.ptr); this.type = DefaultWorld; getCache(DefaultWorld)[this.ptr] = this;
};
DefaultWorld.prototype = Object.create(WrapperObject.prototype);
DefaultWorld.prototype.constructor = DefaultWorld;
DefaultWorld.prototype.__class__ = DefaultWorld;
DefaultWorld.__cache__ = {};
Module['DefaultWorld'] = DefaultWorld;
Object.defineProperty(DefaultWorld.prototype, "world", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_DefaultWorld__get_world(self), World);
    }});
Object.defineProperty(DefaultWorld.prototype, "bullet_world", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_DefaultWorld__get_bullet_world(self), BulletWorld);
    }});
Object.defineProperty(DefaultWorld.prototype, "navmesh", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_DefaultWorld__get_navmesh(self), Navmesh);
    }});
DefaultWorld.prototype["__destroy__"] = DefaultWorld.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_DefaultWorld__destroy(self);
};
// DetourPath
function DetourPath() { throw "cannot construct a DetourPath, no constructor in IDL" }
DetourPath.prototype = Object.create(WrapperObject.prototype);
DetourPath.prototype.constructor = DetourPath;
DetourPath.prototype.__class__ = DetourPath;
DetourPath.__cache__ = {};
Module['DetourPath'] = DetourPath;
DetourPath.prototype["__destroy__"] = DetourPath.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_DetourPath__destroy(self);
};
// Emitter
function Emitter(a0) {
    if (a0 === undefined) { this.ptr = _toy_Emitter__construct_0(); this.type = Emitter; getCache(Emitter)[this.ptr] = this; return; }
    this.ptr = _toy_Emitter__construct_1(/*spatial*/a0.ptr); this.type = Emitter; getCache(Emitter)[this.ptr] = this;
};
Emitter.prototype = Object.create(WrapperObject.prototype);
Emitter.prototype.constructor = Emitter;
Emitter.prototype.__class__ = Emitter;
Emitter.__cache__ = {};
Module['Emitter'] = Emitter;
Emitter.prototype["__destroy__"] = Emitter.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Emitter__destroy(self);
};
// EntityScript
function EntityScript(a0) {
    if (a0 === undefined) { this.ptr = _toy_EntityScript__construct_0(); this.type = EntityScript; getCache(EntityScript)[this.ptr] = this; return; }
    this.ptr = _toy_EntityScript__construct_1(/*spatial*/a0.ptr); this.type = EntityScript; getCache(EntityScript)[this.ptr] = this;
};
EntityScript.prototype = Object.create(WrapperObject.prototype);
EntityScript.prototype.constructor = EntityScript;
EntityScript.prototype.__class__ = EntityScript;
EntityScript.__cache__ = {};
Module['EntityScript'] = EntityScript;
Object.defineProperty(EntityScript.prototype, "logic_script", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_EntityScript__get_logic_script(self), Script);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_EntityScript__set_logic_script(self, value.ptr);
    }
});
Object.defineProperty(EntityScript.prototype, "render_script", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_EntityScript__get_render_script(self), Script);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_EntityScript__set_render_script(self, value.ptr);
    }
});
EntityScript.prototype["__destroy__"] = EntityScript.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_EntityScript__destroy(self);
};
// Medium
function Medium() { throw "cannot construct a Medium, no constructor in IDL" }
Medium.prototype = Object.create(WrapperObject.prototype);
Medium.prototype.constructor = Medium;
Medium.prototype.__class__ = Medium;
Medium.__cache__ = {};
Module['Medium'] = Medium;
Object.defineProperty(Medium.prototype, "name", {
    get: function() {
        var self = this.ptr;
        return Pointer_stringify(_toy_Medium__get_name(self));
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Medium__set_name(self, ensureString(value));
    }
});
Object.defineProperty(Medium.prototype, "occlusions", {
    get: function() {
        var self = this.ptr;
        return !!(_toy_Medium__get_occlusions(self));
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Medium__set_occlusions(self, value);
    }
});
Object.defineProperty(Medium.prototype, "solid", {
    get: function() {
        var self = this.ptr;
        return !!(_toy_Medium__get_solid(self));
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Medium__set_solid(self, value);
    }
});
Medium.prototype["__destroy__"] = Medium.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Medium__destroy(self);
};
// Movable
function Movable(a0) {
    if (a0 === undefined) { this.ptr = _toy_Movable__construct_0(); this.type = Movable; getCache(Movable)[this.ptr] = this; return; }
    this.ptr = _toy_Movable__construct_1(/*position*/a0.ptr); this.type = Movable; getCache(Movable)[this.ptr] = this;
};
Movable.prototype = Object.create(WrapperObject.prototype);
Movable.prototype.constructor = Movable;
Movable.prototype.__class__ = Movable;
Movable.__cache__ = {};
Module['Movable'] = Movable;
Movable.prototype["set_linear_velocity"] = Movable.prototype.set_linear_velocity = function(a0) {
    var self = this.ptr;
    _toy_Movable_set_linear_velocity_1(self, /*velocity*/a0.ptr);
};
Movable.prototype["modify_linear_velocity"] = Movable.prototype.modify_linear_velocity = function(a0) {
    var self = this.ptr;
    _toy_Movable_modify_linear_velocity_1(self, /*velocity*/a0.ptr);
};
Movable.prototype["set_angular_velocity"] = Movable.prototype.set_angular_velocity = function(a0) {
    var self = this.ptr;
    _toy_Movable_set_angular_velocity_1(self, /*velocity*/a0.ptr);
};
Movable.prototype["modify_angular_velocity"] = Movable.prototype.modify_angular_velocity = function(a0) {
    var self = this.ptr;
    _toy_Movable_modify_angular_velocity_1(self, /*velocity*/a0.ptr);
};
Object.defineProperty(Movable.prototype, "linear_velocity", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Movable__get_linear_velocity(self), v3_float);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Movable__set_linear_velocity(self, value.ptr);
    }
});
Object.defineProperty(Movable.prototype, "angular_velocity", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Movable__get_angular_velocity(self), v3_float);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Movable__set_angular_velocity(self, value.ptr);
    }
});
Object.defineProperty(Movable.prototype, "moving", {
    get: function() {
        var self = this.ptr;
        return !!(_toy_Movable__get_moving(self));
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Movable__set_moving(self, value);
    }
});
Object.defineProperty(Movable.prototype, "previous_position", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Movable__get_previous_position(self), v3_float);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Movable__set_previous_position(self, value.ptr);
    }
});
Movable.prototype["__destroy__"] = Movable.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Movable__destroy(self);
};
// Navblock
function Navblock(a0, a1, a2) {
    if (a0 === undefined) { this.ptr = _toy_Navblock__construct_0(); this.type = Navblock; getCache(Navblock)[this.ptr] = this; return; }
    this.ptr = _toy_Navblock__construct_3(/*spatial*/a0.ptr, /*world_page*/a1.ptr, /*navmesh*/a2.ptr); this.type = Navblock; getCache(Navblock)[this.ptr] = this;
};
Navblock.prototype = Object.create(WrapperObject.prototype);
Navblock.prototype.constructor = Navblock;
Navblock.prototype.__class__ = Navblock;
Navblock.__cache__ = {};
Module['Navblock'] = Navblock;
Object.defineProperty(Navblock.prototype, "navmesh", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Navblock__get_navmesh(self), Navmesh);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Navblock__set_navmesh(self, value.ptr);
    }
});
Object.defineProperty(Navblock.prototype, "auto_update", {
    get: function() {
        var self = this.ptr;
        return !!(_toy_Navblock__get_auto_update(self));
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Navblock__set_auto_update(self, value);
    }
});
Object.defineProperty(Navblock.prototype, "updated", {
    get: function() {
        var self = this.ptr;
        return _toy_Navblock__get_updated(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Navblock__set_updated(self, value);
    }
});
Navblock.prototype["__destroy__"] = Navblock.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Navblock__destroy(self);
};
// Navmesh
function Navmesh(a0) {
    this.ptr = _toy_Navmesh__construct_1(/*world*/a0.ptr); this.type = Navmesh; getCache(Navmesh)[this.ptr] = this;
};
Navmesh.prototype = Object.create(WrapperObject.prototype);
Navmesh.prototype.constructor = Navmesh;
Navmesh.prototype.__class__ = Navmesh;
Navmesh.__cache__ = {};
Module['Navmesh'] = Navmesh;
Object.defineProperty(Navmesh.prototype, "world", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Navmesh__get_world(self), World);
    }});
Object.defineProperty(Navmesh.prototype, "updated", {
    get: function() {
        var self = this.ptr;
        return _toy_Navmesh__get_updated(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Navmesh__set_updated(self, value);
    }
});
Object.defineProperty(Navmesh.prototype, "dirty", {
    get: function() {
        var self = this.ptr;
        return !!(_toy_Navmesh__get_dirty(self));
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Navmesh__set_dirty(self, value);
    }
});
Navmesh.prototype["__destroy__"] = Navmesh.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Navmesh__destroy(self);
};
// NavmeshShape
function NavmeshShape(a0) {
    this.ptr = _toy_NavmeshShape__construct_1(/*navmesh*/a0.ptr); this.type = NavmeshShape; getCache(NavmeshShape)[this.ptr] = this;
};
NavmeshShape.prototype = Object.create(WrapperObject.prototype);
NavmeshShape.prototype.constructor = NavmeshShape;
NavmeshShape.prototype.__class__ = NavmeshShape;
NavmeshShape.__cache__ = {};
Module['NavmeshShape'] = NavmeshShape;
NavmeshShape.prototype["__destroy__"] = NavmeshShape.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_NavmeshShape__destroy(self);
};
// Origin
function Origin() {
    this.ptr = _toy_Origin__construct_0(); this.type = Origin; getCache(Origin)[this.ptr] = this;
};
Origin.prototype = Object.create(WrapperObject.prototype);
Origin.prototype.constructor = Origin;
Origin.prototype.__class__ = Origin;
Origin.__cache__ = {};
Module['Origin'] = Origin;
Origin.prototype["__destroy__"] = Origin.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Origin__destroy(self);
};
// OwnedHandle<toy::Collider>
function OwnedHandle_toy_Collider() {
    this.ptr = _mud_OwnedHandle_toy_Collider__construct_0(); this.type = OwnedHandle_toy_Collider; getCache(OwnedHandle_toy_Collider)[this.ptr] = this;
};
OwnedHandle_toy_Collider.prototype = Object.create(WrapperObject.prototype);
OwnedHandle_toy_Collider.prototype.constructor = OwnedHandle_toy_Collider;
OwnedHandle_toy_Collider.prototype.__class__ = OwnedHandle_toy_Collider;
OwnedHandle_toy_Collider.__cache__ = {};
Module['mud']['OwnedHandle_toy_Collider'] = OwnedHandle_toy_Collider;
OwnedHandle_toy_Collider.prototype["__destroy__"] = OwnedHandle_toy_Collider.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_OwnedHandle_toy_Collider__destroy(self);
};
// OwnedHandle<toy::Solid>
function OwnedHandle_toy_Solid() {
    this.ptr = _mud_OwnedHandle_toy_Solid__construct_0(); this.type = OwnedHandle_toy_Solid; getCache(OwnedHandle_toy_Solid)[this.ptr] = this;
};
OwnedHandle_toy_Solid.prototype = Object.create(WrapperObject.prototype);
OwnedHandle_toy_Solid.prototype.constructor = OwnedHandle_toy_Solid;
OwnedHandle_toy_Solid.prototype.__class__ = OwnedHandle_toy_Solid;
OwnedHandle_toy_Solid.__cache__ = {};
Module['mud']['OwnedHandle_toy_Solid'] = OwnedHandle_toy_Solid;
OwnedHandle_toy_Solid.prototype["__destroy__"] = OwnedHandle_toy_Solid.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_OwnedHandle_toy_Solid__destroy(self);
};
// Pathfinder
function Pathfinder(a0) {
    this.ptr = _toy_Pathfinder__construct_1(/*navmesh*/a0.ptr); this.type = Pathfinder; getCache(Pathfinder)[this.ptr] = this;
};
Pathfinder.prototype = Object.create(WrapperObject.prototype);
Pathfinder.prototype.constructor = Pathfinder;
Pathfinder.prototype.__class__ = Pathfinder;
Pathfinder.__cache__ = {};
Module['Pathfinder'] = Pathfinder;
Pathfinder.prototype["__destroy__"] = Pathfinder.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Pathfinder__destroy(self);
};
// PhysicWorld
function PhysicWorld() { throw "cannot construct a PhysicWorld, no constructor in IDL" }
PhysicWorld.prototype = Object.create(WrapperObject.prototype);
PhysicWorld.prototype.constructor = PhysicWorld;
PhysicWorld.prototype.__class__ = PhysicWorld;
PhysicWorld.__cache__ = {};
Module['PhysicWorld'] = PhysicWorld;
PhysicWorld.prototype["ground_point"] = PhysicWorld.prototype.ground_point = function(a0) {
    var self = this.ptr;
    return wrapPointer(_toy_PhysicWorld_ground_point_1(self, /*ray*/a0.ptr), v3_float);
};
PhysicWorld.prototype["raycast"] = PhysicWorld.prototype.raycast = function(a0, a1) {
    var self = this.ptr;
    return wrapPointer(_toy_PhysicWorld_raycast_2(self, /*ray*/a0.ptr, /*mask*/a1), Collision);
};
Object.defineProperty(PhysicWorld.prototype, "world", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_PhysicWorld__get_world(self), World);
    }});
PhysicWorld.prototype["__destroy__"] = PhysicWorld.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_PhysicWorld__destroy(self);
};
// Receptor
function Receptor(a0) {
    if (a0 === undefined) { this.ptr = _toy_Receptor__construct_0(); this.type = Receptor; getCache(Receptor)[this.ptr] = this; return; }
    this.ptr = _toy_Receptor__construct_1(/*spatial*/a0.ptr); this.type = Receptor; getCache(Receptor)[this.ptr] = this;
};
Receptor.prototype = Object.create(WrapperObject.prototype);
Receptor.prototype.constructor = Receptor;
Receptor.prototype.__class__ = Receptor;
Receptor.__cache__ = {};
Module['Receptor'] = Receptor;
Receptor.prototype["scope"] = Receptor.prototype.scope = function(a0) {
    var self = this.ptr;
    return wrapPointer(_toy_Receptor_scope_1(self, /*medium*/a0.ptr), ReceptorScope);
};
Receptor.prototype["__destroy__"] = Receptor.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Receptor__destroy(self);
};
// Solid
function Solid() { throw "cannot construct a Solid, no constructor in IDL" }
Solid.prototype = Object.create(WrapperObject.prototype);
Solid.prototype.constructor = Solid;
Solid.prototype.__class__ = Solid;
Solid.__cache__ = {};
Module['Solid'] = Solid;
Object.defineProperty(Solid.prototype, "spatial", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Solid__get_spatial(self), ComponentHandle_toy_Spatial);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Solid__set_spatial(self, value.ptr);
    }
});
Object.defineProperty(Solid.prototype, "static", {
    get: function() {
        var self = this.ptr;
        return !!(_toy_Solid__get_static(self));
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Solid__set_static(self, value);
    }
});
Object.defineProperty(Solid.prototype, "mass", {
    get: function() {
        var self = this.ptr;
        return _toy_Solid__get_mass(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Solid__set_mass(self, value);
    }
});
Solid.prototype["__destroy__"] = Solid.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Solid__destroy(self);
};
// SolidImpl
function SolidImpl() { throw "cannot construct a SolidImpl, no constructor in IDL" }
SolidImpl.prototype = Object.create(WrapperObject.prototype);
SolidImpl.prototype.constructor = SolidImpl;
SolidImpl.prototype.__class__ = SolidImpl;
SolidImpl.__cache__ = {};
Module['SolidImpl'] = SolidImpl;
SolidImpl.prototype["linear_velocity"] = SolidImpl.prototype.linear_velocity = function() {
    var self = this.ptr;
    return wrapPointer(_toy_SolidImpl_linear_velocity_0(self), v3_float);
};
SolidImpl.prototype["angular_velocity"] = SolidImpl.prototype.angular_velocity = function() {
    var self = this.ptr;
    return wrapPointer(_toy_SolidImpl_angular_velocity_0(self), v3_float);
};
SolidImpl.prototype["set_linear_velocity"] = SolidImpl.prototype.set_linear_velocity = function(a0) {
    var self = this.ptr;
    _toy_SolidImpl_set_linear_velocity_1(self, /*force*/a0.ptr);
};
SolidImpl.prototype["set_angular_velocity"] = SolidImpl.prototype.set_angular_velocity = function(a0) {
    var self = this.ptr;
    _toy_SolidImpl_set_angular_velocity_1(self, /*torque*/a0.ptr);
};
SolidImpl.prototype["set_angular_factor"] = SolidImpl.prototype.set_angular_factor = function(a0) {
    var self = this.ptr;
    _toy_SolidImpl_set_angular_factor_1(self, /*factor*/a0.ptr);
};
SolidImpl.prototype["impulse"] = SolidImpl.prototype.impulse = function(a0, a1) {
    var self = this.ptr;
    _toy_SolidImpl_impulse_2(self, /*force*/a0.ptr, /*point*/a1.ptr);
};
SolidImpl.prototype["__destroy__"] = SolidImpl.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_SolidImpl__destroy(self);
};
// SparseHandle<toy::Collider>
function SparseHandle_toy_Collider() {
    this.ptr = _mud_SparseHandle_toy_Collider__construct_0(); this.type = SparseHandle_toy_Collider; getCache(SparseHandle_toy_Collider)[this.ptr] = this;
};
SparseHandle_toy_Collider.prototype = Object.create(WrapperObject.prototype);
SparseHandle_toy_Collider.prototype.constructor = SparseHandle_toy_Collider;
SparseHandle_toy_Collider.prototype.__class__ = SparseHandle_toy_Collider;
SparseHandle_toy_Collider.__cache__ = {};
Module['mud']['SparseHandle_toy_Collider'] = SparseHandle_toy_Collider;
SparseHandle_toy_Collider.prototype["__destroy__"] = SparseHandle_toy_Collider.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_SparseHandle_toy_Collider__destroy(self);
};
// SparseHandle<toy::Solid>
function SparseHandle_toy_Solid() {
    this.ptr = _mud_SparseHandle_toy_Solid__construct_0(); this.type = SparseHandle_toy_Solid; getCache(SparseHandle_toy_Solid)[this.ptr] = this;
};
SparseHandle_toy_Solid.prototype = Object.create(WrapperObject.prototype);
SparseHandle_toy_Solid.prototype.constructor = SparseHandle_toy_Solid;
SparseHandle_toy_Solid.prototype.__class__ = SparseHandle_toy_Solid;
SparseHandle_toy_Solid.__cache__ = {};
Module['mud']['SparseHandle_toy_Solid'] = SparseHandle_toy_Solid;
SparseHandle_toy_Solid.prototype["__destroy__"] = SparseHandle_toy_Solid.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_SparseHandle_toy_Solid__destroy(self);
};
// Spatial
function Spatial(a0, a1, a2, a3) {
    if (a0 === undefined) { this.ptr = _toy_Spatial__construct_0(); this.type = Spatial; getCache(Spatial)[this.ptr] = this; return; }
    if (a3 === undefined) { this.ptr = _toy_Spatial__construct_3(/*parent*/a0.ptr, /*position*/a1.ptr, /*rotation*/a2.ptr); this.type = Spatial; getCache(Spatial)[this.ptr] = this; return; }
    this.ptr = _toy_Spatial__construct_4(/*world*/a0.ptr, /*parent*/a1.ptr, /*position*/a2.ptr, /*rotation*/a3.ptr); this.type = Spatial; getCache(Spatial)[this.ptr] = this;
};
Spatial.prototype = Object.create(WrapperObject.prototype);
Spatial.prototype.constructor = Spatial;
Spatial.prototype.__class__ = Spatial;
Spatial.__cache__ = {};
Module['Spatial'] = Spatial;
Spatial.prototype["set_position"] = Spatial.prototype.set_position = function(a0) {
    var self = this.ptr;
    _toy_Spatial_set_position_1(self, /*position*/a0.ptr);
};
Spatial.prototype["set_rotation"] = Spatial.prototype.set_rotation = function(a0) {
    var self = this.ptr;
    _toy_Spatial_set_rotation_1(self, /*rotation*/a0.ptr);
};
Object.defineProperty(Spatial.prototype, "world", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Spatial__get_world(self), World);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Spatial__set_world(self, value.ptr);
    }
});
Object.defineProperty(Spatial.prototype, "parent", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Spatial__get_parent(self), ComponentHandle_toy_Spatial);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Spatial__set_parent(self, value.ptr);
    }
});
Spatial.prototype["__destroy__"] = Spatial.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Spatial__destroy(self);
};
// User
function User() { throw "cannot construct a User, no constructor in IDL" }
User.prototype = Object.create(WrapperObject.prototype);
User.prototype.constructor = User;
User.prototype.__class__ = User;
User.__cache__ = {};
Module['User'] = User;
User.prototype["__destroy__"] = User.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_User__destroy(self);
};
// Waypoint
function Waypoint() {
    this.ptr = _toy_Waypoint__construct_0(); this.type = Waypoint; getCache(Waypoint)[this.ptr] = this;
};
Waypoint.prototype = Object.create(WrapperObject.prototype);
Waypoint.prototype.constructor = Waypoint;
Waypoint.prototype.__class__ = Waypoint;
Waypoint.__cache__ = {};
Module['Waypoint'] = Waypoint;
Waypoint.prototype["__destroy__"] = Waypoint.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Waypoint__destroy(self);
};
// World
World.prototype = Object.create(WrapperObject.prototype);
World.prototype.constructor = World;
World.prototype.__class__ = World;
World.__cache__ = {};
Module['World'] = World;
Object.defineProperty(World.prototype, "id", {
    get: function() {
        var self = this.ptr;
        return _toy_World__get_id(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_World__set_id(self, value);
    }
});
Object.defineProperty(World.prototype, "name", {
    get: function() {
        var self = this.ptr;
        return Pointer_stringify(_toy_World__get_name(self));
    },
    set: function(value) {
        var self = this.ptr;
        _toy_World__set_name(self, ensureString(value));
    }
});
Object.defineProperty(World.prototype, "origin", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_World__get_origin(self), ComponentHandle_toy_Spatial);
    }});
Object.defineProperty(World.prototype, "unworld", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_World__get_unworld(self), ComponentHandle_toy_Spatial);
    }});
World.prototype["__destroy__"] = World.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_World__destroy(self);
};
// WorldClock
function WorldClock() { throw "cannot construct a WorldClock, no constructor in IDL" }
WorldClock.prototype = Object.create(WrapperObject.prototype);
WorldClock.prototype.constructor = WorldClock;
WorldClock.prototype.__class__ = WorldClock;
WorldClock.__cache__ = {};
Module['WorldClock'] = WorldClock;
WorldClock.prototype["__destroy__"] = WorldClock.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_WorldClock__destroy(self);
};
// WorldPage
function WorldPage(a0, a1, a2) {
    if (a0 === undefined) { this.ptr = _toy_WorldPage__construct_0(); this.type = WorldPage; getCache(WorldPage)[this.ptr] = this; return; }
    this.ptr = _toy_WorldPage__construct_3(/*spatial*/a0.ptr, /*open*/a1, /*extents*/a2.ptr); this.type = WorldPage; getCache(WorldPage)[this.ptr] = this;
};
WorldPage.prototype = Object.create(WrapperObject.prototype);
WorldPage.prototype.constructor = WorldPage;
WorldPage.prototype.__class__ = WorldPage;
WorldPage.__cache__ = {};
Module['WorldPage'] = WorldPage;
WorldPage.prototype["update_geometry"] = WorldPage.prototype.update_geometry = function(a0) {
    var self = this.ptr;
    _toy_WorldPage_update_geometry_1(self, /*tick*/a0);
};
WorldPage.prototype["ground_point"] = WorldPage.prototype.ground_point = function(a0, a1, a2) {
    var self = this.ptr;
    _toy_WorldPage_ground_point_3(self, /*position*/a0.ptr, /*relative*/a1, /*outputPoint*/a2.ptr);
};
WorldPage.prototype["raycast_ground"] = WorldPage.prototype.raycast_ground = function(a0, a1, a2) {
    var self = this.ptr;
    _toy_WorldPage_raycast_ground_3(self, /*from*/a0.ptr, /*to*/a1.ptr, /*ground_point*/a2.ptr);
};
Object.defineProperty(WorldPage.prototype, "open", {
    get: function() {
        var self = this.ptr;
        return !!(_toy_WorldPage__get_open(self));
    },
    set: function(value) {
        var self = this.ptr;
        _toy_WorldPage__set_open(self, value);
    }
});
Object.defineProperty(WorldPage.prototype, "extents", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_WorldPage__get_extents(self), v3_float);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_WorldPage__set_extents(self, value.ptr);
    }
});
Object.defineProperty(WorldPage.prototype, "world", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_WorldPage__get_world(self), World);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_WorldPage__set_world(self, value.ptr);
    }
});
Object.defineProperty(WorldPage.prototype, "last_rebuilt", {
    get: function() {
        var self = this.ptr;
        return _toy_WorldPage__get_last_rebuilt(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_WorldPage__set_last_rebuilt(self, value);
    }
});
WorldPage.prototype["__destroy__"] = WorldPage.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_WorldPage__destroy(self);
};
// BulletCollider
function BulletCollider() { throw "cannot construct a BulletCollider, no constructor in IDL" }
BulletCollider.prototype = Object.create(ColliderImpl.prototype);
BulletCollider.prototype.constructor = BulletCollider;
BulletCollider.prototype.__class__ = BulletCollider;
BulletCollider.__cache__ = {};
Module['BulletCollider'] = BulletCollider;
BulletCollider.prototype["__destroy__"] = BulletCollider.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_BulletCollider__destroy(self);
};
// BulletSolid
function BulletSolid() { throw "cannot construct a BulletSolid, no constructor in IDL" }
BulletSolid.prototype = Object.create(SolidImpl.prototype);
BulletSolid.prototype.constructor = BulletSolid;
BulletSolid.prototype.__class__ = BulletSolid;
BulletSolid.__cache__ = {};
Module['BulletSolid'] = BulletSolid;
BulletSolid.prototype["__destroy__"] = BulletSolid.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_BulletSolid__destroy(self);
};
// BulletWorld
function BulletWorld(a0) {
    this.ptr = _toy_BulletWorld__construct_1(/*world*/a0.ptr); this.type = BulletWorld; getCache(BulletWorld)[this.ptr] = this;
};
BulletWorld.prototype = Object.create(PhysicWorld.prototype);
BulletWorld.prototype.constructor = BulletWorld;
BulletWorld.prototype.__class__ = BulletWorld;
BulletWorld.__cache__ = {};
Module['BulletWorld'] = BulletWorld;
BulletWorld.prototype["__destroy__"] = BulletWorld.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_BulletWorld__destroy(self);
};
// PhysicScope
function PhysicScope() { throw "cannot construct a PhysicScope, no constructor in IDL" }
PhysicScope.prototype = Object.create(ColliderObject.prototype);
PhysicScope.prototype.constructor = PhysicScope;
PhysicScope.prototype.__class__ = PhysicScope;
PhysicScope.__cache__ = {};
Module['PhysicScope'] = PhysicScope;
PhysicScope.prototype["__destroy__"] = PhysicScope.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_PhysicScope__destroy(self);
};
// EmitterScope
function EmitterScope() { throw "cannot construct a EmitterScope, no constructor in IDL" }
EmitterScope.prototype = Object.create(PhysicScope.prototype);
EmitterScope.prototype.constructor = EmitterScope;
EmitterScope.prototype.__class__ = EmitterScope;
EmitterScope.__cache__ = {};
Module['EmitterScope'] = EmitterScope;
EmitterScope.prototype["__destroy__"] = EmitterScope.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_EmitterScope__destroy(self);
};
// Obstacle
function Obstacle(a0, a1, a2, a3, a4) {
    this.ptr = _toy_Obstacle__construct_5(/*spatial*/a0.ptr, /*movable*/a1.ptr, /*medium*/a2.ptr, /*shape*/a3.ptr, /*throughput*/a4); this.type = Obstacle; getCache(Obstacle)[this.ptr] = this;
};
Obstacle.prototype = Object.create(Collider.prototype);
Obstacle.prototype.constructor = Obstacle;
Obstacle.prototype.__class__ = Obstacle;
Obstacle.__cache__ = {};
Module['Obstacle'] = Obstacle;
Object.defineProperty(Obstacle.prototype, "shape", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_toy_Obstacle__get_shape(self), CollisionShape);
    }});
Object.defineProperty(Obstacle.prototype, "throughput", {
    get: function() {
        var self = this.ptr;
        return _toy_Obstacle__get_throughput(self);
    },
    set: function(value) {
        var self = this.ptr;
        _toy_Obstacle__set_throughput(self, value);
    }
});
Obstacle.prototype["__destroy__"] = Obstacle.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_Obstacle__destroy(self);
};
// ReceptorScope
function ReceptorScope() { throw "cannot construct a ReceptorScope, no constructor in IDL" }
ReceptorScope.prototype = Object.create(PhysicScope.prototype);
ReceptorScope.prototype.constructor = ReceptorScope;
ReceptorScope.prototype.__class__ = ReceptorScope;
ReceptorScope.__cache__ = {};
Module['ReceptorScope'] = ReceptorScope;
ReceptorScope.prototype["__destroy__"] = ReceptorScope.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_ReceptorScope__destroy(self);
};
// SolidMedium
function SolidMedium() {
    this.ptr = _toy_SolidMedium__construct_0(); this.type = SolidMedium; getCache(SolidMedium)[this.ptr] = this;
};
SolidMedium.prototype = Object.create(Medium.prototype);
SolidMedium.prototype.constructor = SolidMedium;
SolidMedium.prototype.__class__ = SolidMedium;
SolidMedium.__cache__ = {};
Module['SolidMedium'] = SolidMedium;
SolidMedium.prototype["__destroy__"] = SolidMedium.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_SolidMedium__destroy(self);
};
// SoundMedium
function SoundMedium() {
    this.ptr = _toy_SoundMedium__construct_0(); this.type = SoundMedium; getCache(SoundMedium)[this.ptr] = this;
};
SoundMedium.prototype = Object.create(Medium.prototype);
SoundMedium.prototype.constructor = SoundMedium;
SoundMedium.prototype.__class__ = SoundMedium;
SoundMedium.__cache__ = {};
Module['SoundMedium'] = SoundMedium;
SoundMedium.prototype["__destroy__"] = SoundMedium.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_SoundMedium__destroy(self);
};
// VisualMedium
function VisualMedium() {
    this.ptr = _toy_VisualMedium__construct_0(); this.type = VisualMedium; getCache(VisualMedium)[this.ptr] = this;
};
VisualMedium.prototype = Object.create(Medium.prototype);
VisualMedium.prototype.constructor = VisualMedium;
VisualMedium.prototype.__class__ = VisualMedium;
VisualMedium.__cache__ = {};
Module['VisualMedium'] = VisualMedium;
VisualMedium.prototype["__destroy__"] = VisualMedium.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_VisualMedium__destroy(self);
};
// WorldMedium
function WorldMedium() {
    this.ptr = _toy_WorldMedium__construct_0(); this.type = WorldMedium; getCache(WorldMedium)[this.ptr] = this;
};
WorldMedium.prototype = Object.create(Medium.prototype);
WorldMedium.prototype.constructor = WorldMedium;
WorldMedium.prototype.__class__ = WorldMedium;
WorldMedium.__cache__ = {};
Module['WorldMedium'] = WorldMedium;
WorldMedium.prototype["__destroy__"] = WorldMedium.prototype.__destroy__ = function() {
    var self = this.ptr;
    _toy_WorldMedium__destroy(self);
};
Module['move_2d'] = function(a0, a1, a2, a3, a4, a5) {
    if (a5 === undefined) { return !!(_toy_move_2d_5(/*spatial*/a0.ptr, /*movable*/a1.ptr, /*target*/a2.ptr, /*velocity*/a3, /*time_step*/a4)); }
    return !!(_toy_move_2d_6(/*spatial*/a0.ptr, /*movable*/a1.ptr, /*target*/a2.ptr, /*velocity*/a3, /*time_step*/a4, /*margin*/a5));
};
Module['steer_2d'] = function(a0, a1, a2, a3, a4, a5) {
    if (a5 === undefined) { return !!(_toy_steer_2d_5(/*spatial*/a0.ptr, /*movable*/a1.ptr, /*target*/a2.ptr, /*velocity*/a3, /*time_step*/a4)); }
    return !!(_toy_steer_2d_6(/*spatial*/a0.ptr, /*movable*/a1.ptr, /*target*/a2.ptr, /*velocity*/a3, /*time_step*/a4, /*margin*/a5));
};
Module['HCollider'] = SparseHandle_toy_Collider;
Module['OCollider'] = OwnedHandle_toy_Collider;
Module['HSolid'] = SparseHandle_toy_Solid;
Module['OSolid'] = OwnedHandle_toy_Solid;
Module['HSpatial'] = ComponentHandle_toy_Spatial;
Module['HMovable'] = ComponentHandle_toy_Movable;
Module['HCamera'] = ComponentHandle_toy_Camera;
Module['HEmitter'] = ComponentHandle_toy_Emitter;
Module['HReceptor'] = ComponentHandle_toy_Receptor;
Module['HEntityScript'] = ComponentHandle_toy_EntityScript;
Module['HWorldPage'] = ComponentHandle_toy_WorldPage;
Module['HNavblock'] = ComponentHandle_toy_Navblock;
Module['HOrigin'] = ComponentHandle_toy_Origin;
Module['HWaypoint'] = ComponentHandle_toy_Waypoint;

(function() {
    function setup() {
        BulletMedium.__type__ = _toy_BulletMedium__type();
        BulletShape.__type__ = _toy_BulletShape__type();
        Camera.__type__ = _toy_Camera__type();
        Collider.__type__ = _toy_Collider__type();
        ColliderImpl.__type__ = _toy_ColliderImpl__type();
        ColliderObject.__type__ = _toy_ColliderObject__type();
        Collision.__type__ = _toy_Collision__type();
        CollisionShape.__type__ = _toy_CollisionShape__type();
        ComponentPool.__type__ = _toy_ComponentPool__type();
        Core.__type__ = _toy_Core__type();
        DefaultWorld.__type__ = _toy_DefaultWorld__type();
        DetourPath.__type__ = _toy_DetourPath__type();
        Emitter.__type__ = _toy_Emitter__type();
        EntityScript.__type__ = _toy_EntityScript__type();
        Medium.__type__ = _toy_Medium__type();
        Movable.__type__ = _toy_Movable__type();
        Navblock.__type__ = _toy_Navblock__type();
        Navmesh.__type__ = _toy_Navmesh__type();
        NavmeshShape.__type__ = _toy_NavmeshShape__type();
        Origin.__type__ = _toy_Origin__type();
        Pathfinder.__type__ = _toy_Pathfinder__type();
        PhysicWorld.__type__ = _toy_PhysicWorld__type();
        Receptor.__type__ = _toy_Receptor__type();
        Solid.__type__ = _toy_Solid__type();
        SolidImpl.__type__ = _toy_SolidImpl__type();
        Spatial.__type__ = _toy_Spatial__type();
        User.__type__ = _toy_User__type();
        Waypoint.__type__ = _toy_Waypoint__type();
        World.__type__ = _toy_World__type();
        WorldClock.__type__ = _toy_WorldClock__type();
        WorldPage.__type__ = _toy_WorldPage__type();
        BulletCollider.__type__ = _toy_BulletCollider__type();
        BulletSolid.__type__ = _toy_BulletSolid__type();
        BulletWorld.__type__ = _toy_BulletWorld__type();
        PhysicScope.__type__ = _toy_PhysicScope__type();
        EmitterScope.__type__ = _toy_EmitterScope__type();
        Obstacle.__type__ = _toy_Obstacle__type();
        ReceptorScope.__type__ = _toy_ReceptorScope__type();
        SolidMedium.__type__ = _toy_SolidMedium__type();
        SoundMedium.__type__ = _toy_SoundMedium__type();
        VisualMedium.__type__ = _toy_VisualMedium__type();
        WorldMedium.__type__ = _toy_WorldMedium__type();
        // CollisionGroup
        Module['CM_NOMASK'] = _toy_CollisionGroup_CM_NOMASK();
        Module['CM_OBJECT'] = _toy_CollisionGroup_CM_OBJECT();
        Module['CM_SOLID'] = _toy_CollisionGroup_CM_SOLID();
        Module['CM_GROUND'] = _toy_CollisionGroup_CM_GROUND();
        Module['CM_AREA'] = _toy_CollisionGroup_CM_AREA();
        Module['CM_BUFFER'] = _toy_CollisionGroup_CM_BUFFER();
        Module['CM_LIGHT'] = _toy_CollisionGroup_CM_LIGHT();
        Module['CM_LIGHTREFLECTOR'] = _toy_CollisionGroup_CM_LIGHTREFLECTOR();
        Module['CM_SOURCE'] = _toy_CollisionGroup_CM_SOURCE();
        Module['CM_RECEPTOR'] = _toy_CollisionGroup_CM_RECEPTOR();
        Module['CM_OBSTACLE'] = _toy_CollisionGroup_CM_OBSTACLE();
    }
    if (Module['calledRun']) setup();
    else addOnPreMain(setup);
})();