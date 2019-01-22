#include <infra/Cpp20.h>

#ifdef MUD_MODULES
module toy.visu;
#else
#include <meta/type/Module.h>
#include <meta/gfx/Module.h>
#include <meta/util/Module.h>
#include <meta/core/Module.h>
#include <meta/visu/Module.h>
#include <meta/visu/Convert.h>
#endif

#include <visu/Api.h>
#define TOY_VISU_REFLECTION_IMPL
#include <meta/visu/Meta.h>

namespace toy
{
	toy_visu::toy_visu()
		: Module("toy::visu", { &mud_type::m(), &mud_gfx::m(), &toy_util::m(), &toy_core::m() })
	{
		// setup reflection meta data
		toy_visu_meta(*this);
	}
}

#ifdef TOY_VISU_MODULE
extern "C"
Module& getModule()
{
		return toy_visu::m();
}
#endif
