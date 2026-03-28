// Translation scripts for KDE in Latvian

// Lifted from:
// https://techbase.kde.org/Localization/Concepts/Transcript#Labels_Dependent_on_Dynamic_Values
function selectByContext ()
{
    if (arguments.length < 1) {
        throw Error("Selector by context needs at least one argument.");
    }

    // Collect context value for the given key.
    var ctxtkey = arguments[0];
    var ctxtval = Ts.dynctxt(ctxtkey);

    // Match the context and select the corresponding phrase.
    var phrase;
    for (var i = 1; i < arguments.length; i += 2) {
        if (ctxtval.match(RegExp(arguments[i]))) {
            phrase = arguments[i + 1];
            break;
        }
    }

    // If context was not matched, select default phrase or signal fallback.
    if (phrase == undefined) {
        if (arguments.length % 2 == 0) {
            phrase = arguments[arguments.length - 1];
        } else {
            throw Ts.fallback();
        }
    }

    return phrase;
}
Ts.setcall("by-context", selectByContext);
