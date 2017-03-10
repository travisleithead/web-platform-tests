var browserTests = [
["foo[]bar",
    [["subscript",""]],
    "foo[]bar",
    [true],
    {"subscript":[false,false,"",false,true,""]}],
["<p>[foo</p> <p>bar]</p>",
    [["stylewithcss","true"],["subscript",""]],
    "<p><sub>[foo</sub></p> <p><sub>bar]</sub></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["<p>[foo</p> <p>bar]</p>",
    [["stylewithcss","false"],["subscript",""]],
    "<p><sub>[foo</sub></p> <p><sub>bar]</sub></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<span>[foo</span> <span>bar]</span>",
    [["stylewithcss","true"],["subscript",""]],
    "<sub><span>[foo</span> <span>bar]</span></sub>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["<span>[foo</span> <span>bar]</span>",
    [["stylewithcss","false"],["subscript",""]],
    "<sub><span>[foo</span> <span>bar]</span></sub>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<p>[foo</p><p> <span>bar</span> </p><p>baz]</p>",
    [["stylewithcss","true"],["subscript",""]],
    "<p><sub>[foo</sub></p><p> <sub><span>bar</span></sub> </p><p><sub>baz]</sub></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["<p>[foo</p><p> <span>bar</span> </p><p>baz]</p>",
    [["stylewithcss","false"],["subscript",""]],
    "<p><sub>[foo</sub></p><p> <sub><span>bar</span></sub> </p><p><sub>baz]</sub></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<p>[foo<p><br><p>bar]",
    [["stylewithcss","true"],["subscript",""]],
    "<p><sub>[foo</sub></p><p><sub><br></sub></p><p><sub>bar]</sub></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["<p>[foo<p><br><p>bar]",
    [["stylewithcss","false"],["subscript",""]],
    "<p><sub>[foo</sub></p><p><sub><br></sub></p><p><sub>bar]</sub></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<b>foo[]bar</b>",
    [["subscript",""]],
    "<b>foo[]bar</b>",
    [true],
    {"subscript":[false,false,"",false,true,""]}],
["<i>foo[]bar</i>",
    [["subscript",""]],
    "<i>foo[]bar</i>",
    [true],
    {"subscript":[false,false,"",false,true,""]}],
["<span>foo</span>{}<span>bar</span>",
    [["subscript",""]],
    "<span>foo</span>{}<span>bar</span>",
    [true],
    {"subscript":[false,false,"",false,true,""]}],
["<span>foo[</span><span>]bar</span>",
    [["subscript",""]],
    "<span>foo[</span><span>]bar</span>",
    [true],
    {"subscript":[false,false,"",false,true,""]}],
["foo[bar]baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo[bar]baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo[bar<b>baz]qoz</b>quz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>[bar</sub><b><sub>baz]</sub>qoz</b>quz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo[bar<b>baz]qoz</b>quz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>[bar</sub><b><sub>baz]</sub>qoz</b>quz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo[bar<i>baz]qoz</i>quz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>[bar</sub><i><sub>baz]</sub>qoz</i>quz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo[bar<i>baz]qoz</i>quz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>[bar</sub><i><sub>baz]</sub>qoz</i>quz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["{<p><p> <p>foo</p>}",
    [["stylewithcss","true"],["subscript",""]],
    "{<p></p><p> </p><p><sub>foo</sub></p>}",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["{<p><p> <p>foo</p>}",
    [["stylewithcss","false"],["subscript",""]],
    "{<p></p><p> </p><p><sub>foo</sub></p>}",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<table><tbody><tr><td>foo<td>b[a]r<td>baz</table>",
    [["stylewithcss","true"],["subscript",""]],
    "<table><tbody><tr><td>foo</td><td>b<sub>[a]</sub>r</td><td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["<table><tbody><tr><td>foo<td>b[a]r<td>baz</table>",
    [["stylewithcss","false"],["subscript",""]],
    "<table><tbody><tr><td>foo</td><td>b<sub>[a]</sub>r</td><td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<table><tbody><tr data-start=1 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["subscript",""]],
    "<table><tbody><tr><td>foo</td>{<td><sub>bar</sub></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["<table><tbody><tr data-start=1 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["subscript",""]],
    "<table><tbody><tr><td>foo</td>{<td><sub>bar</sub></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<table><tbody><tr data-start=0 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["subscript",""]],
    "<table><tbody><tr>{<td><sub>foo</sub></td><td><sub>bar</sub></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["<table><tbody><tr data-start=0 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["subscript",""]],
    "<table><tbody><tr>{<td><sub>foo</sub></td><td><sub>bar</sub></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<table><tbody data-start=0 data-end=1><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["subscript",""]],
    "<table><tbody>{<tr><td><sub>foo</sub></td><td><sub>bar</sub></td><td><sub>baz</sub></td></tr>}</tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["<table><tbody data-start=0 data-end=1><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["subscript",""]],
    "<table><tbody>{<tr><td><sub>foo</sub></td><td><sub>bar</sub></td><td><sub>baz</sub></td></tr>}</tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<table data-start=0 data-end=1><tbody><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["subscript",""]],
    "<table>{<tbody><tr><td><sub>foo</sub></td><td><sub>bar</sub></td><td><sub>baz</sub></td></tr></tbody>}</table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["<table data-start=0 data-end=1><tbody><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["subscript",""]],
    "<table>{<tbody><tr><td><sub>foo</sub></td><td><sub>bar</sub></td><td><sub>baz</sub></td></tr></tbody>}</table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["{<table><tr><td>foo<td>bar<td>baz</table>}",
    [["stylewithcss","true"],["subscript",""]],
    "{<table><tbody><tr><td><sub>foo</sub></td><td><sub>bar</sub></td><td><sub>baz</sub></td></tr></tbody></table>}",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["{<table><tr><td>foo<td>bar<td>baz</table>}",
    [["stylewithcss","false"],["subscript",""]],
    "{<table><tbody><tr><td><sub>foo</sub></td><td><sub>bar</sub></td><td><sub>baz</sub></td></tr></tbody></table>}",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo<sub>b[a]r</sub>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>b</sub>[a]<sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,true,"",false,false,""]}],
["foo<sub>b[a]r</sub>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>b</sub>[a]<sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,true,"",false,false,""]}],
["foo<sup>[bar]</sup>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo<sup>[bar]</sup>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo<sup>b[a]r</sup>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo<sup>b[a]r</sup>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo<span style=vertical-align:sub>[bar]</span>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub><span style=\"vertical-align:sub\">[bar]</span></sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo<span style=vertical-align:sub>[bar]</span>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub><span style=\"vertical-align:sub\">[bar]</span></sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo<span style=vertical-align:super>[bar]</span>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub><span style=\"vertical-align:super\">[bar]</span></sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo<span style=vertical-align:super>[bar]</span>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub><span style=\"vertical-align:super\">[bar]</span></sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo<sub><sub>[bar]</sub></sub>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,true,"",false,false,""]}],
["foo<sub><sub>[bar]</sub></sub>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,true,"",false,false,""]}],
["foo<sub><sub>b[a]r</sub></sub>baz",
    [["subscript",""]],
    "foo<sub>b</sub>[a]<sub>r</sub>baz",
    [true],
    {"subscript":[false,true,"",false,false,""]}],
["foo<sub>b<sub>[a]</sub>r</sub>baz",
    [["subscript",""]],
    "foo<sub>b</sub>[a]<sub>r</sub>baz",
    [true],
    {"subscript":[false,true,"",false,false,""]}],
["foo<sup><sup>[bar]</sup></sup>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo<sup><sup>[bar]</sup></sup>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo<sup><sup>b[a]r</sup></sup>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo<sup><sup>b[a]r</sup></sup>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo<sup>b<sup>[a]</sup>r</sup>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo<sup>b<sup>[a]</sup>r</sup>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["foo<sub><sup>[bar]</sup></sub>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[true,false,"",false,true,""]}],
["foo<sub><sup>[bar]</sup></sub>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[true,false,"",false,true,""]}],
["foo<sub><sup>b[a]r</sup></sub>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[true,false,"",false,true,""]}],
["foo<sub><sup>b[a]r</sup></sub>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[true,false,"",false,true,""]}],
["foo<sub>b<sup>[a]</sup>r</sub>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>b[a]r</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[true,false,"",false,true,""]}],
["foo<sub>b<sup>[a]</sup>r</sub>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>b[a]r</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[true,false,"",false,true,""]}],
["foo<sup><sub>[bar]</sub></sup>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[true,false,"",false,true,""]}],
["foo<sup><sub>[bar]</sub></sup>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>[bar]</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[true,false,"",false,true,""]}],
["foo<sup><sub>b[a]r</sub></sup>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub>b[a]r</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[true,false,"",false,true,""]}],
["foo<sup><sub>b[a]r</sub></sup>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub>b[a]r</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[true,false,"",false,true,""]}],
["foo<sup>b<sub>[a]</sub>r</sup>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[true,false,"",false,true,""]}],
["foo<sup>b<sub>[a]</sub>r</sup>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sup>b</sup><sub>[a]</sub><sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[true,false,"",false,true,""]}],
["fo[o<sub>b]ar</sub>baz",
    [["subscript",""]],
    "fo<sub>[ob]ar</sub>baz",
    [true],
    {"subscript":[true,false,"",false,true,""]}],
["foo<sub>ba[r</sub>b]az",
    [["subscript",""]],
    "foo<sub>ba[rb]</sub>az",
    [true],
    {"subscript":[true,false,"",false,true,""]}],
["fo[o<sub>bar</sub>b]az",
    [["subscript",""]],
    "fo<sub>[obarb]</sub>az",
    [true],
    {"subscript":[true,false,"",false,true,""]}],
["foo[<sub>b]ar</sub>baz",
    [["subscript",""]],
    "foo[b]<sub>ar</sub>baz",
    [true],
    {"subscript":[false,true,"",false,false,""]}],
["foo<sub>ba[r</sub>]baz",
    [["subscript",""]],
    "foo<sub>ba</sub>[r]baz",
    [true],
    {"subscript":[false,true,"",false,false,""]}],
["foo[<sub>bar</sub>]baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,true,"",false,false,""]}],
["foo[<sub>bar</sub>]baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,true,"",false,false,""]}],
["foo<sub>[bar]</sub>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,true,"",false,false,""]}],
["foo<sub>[bar]</sub>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,true,"",false,false,""]}],
["foo{<sub>bar</sub>}baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo{bar}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,true,"",false,false,""]}],
["foo{<sub>bar</sub>}baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo{bar}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,true,"",false,false,""]}],
["<sub>fo[o</sub><sup>b]ar</sup>",
    [["subscript",""]],
    "<sub>fo[ob]</sub><sup>ar</sup>",
    [true],
    {"subscript":[true,false,"",false,true,""]}],
["<sub>fo[o</sub><span style=vertical-align:sub>b]ar</span>",
    [["stylewithcss","true"],["subscript",""]],
    "<sub>fo[o</sub><span style=\"vertical-align:sub\"><sub>b]</sub>ar</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[true,false,"",false,true,""]}],
["<sub>fo[o</sub><span style=vertical-align:sub>b]ar</span>",
    [["stylewithcss","false"],["subscript",""]],
    "<sub>fo[o</sub><span style=\"vertical-align:sub\"><sub>b]</sub>ar</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[true,false,"",false,true,""]}],
["foo<span style=vertical-align:top>[bar]</span>baz",
    [["stylewithcss","true"],["subscript",""]],
    "foo<sub><span style=\"vertical-align:top\">[bar]</span></sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[false,false,"",false,true,""]}],
["foo<span style=vertical-align:top>[bar]</span>baz",
    [["stylewithcss","false"],["subscript",""]],
    "foo<sub><span style=\"vertical-align:top\">[bar]</span></sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[false,false,"",false,true,""]}],
["<sub>fo[o</sub><span style=vertical-align:top>b]ar</span>",
    [["stylewithcss","true"],["subscript",""]],
    "<sub>fo[o</sub><span style=\"vertical-align:top\"><sub>b]</sub>ar</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"subscript":[true,false,"",false,true,""]}],
["<sub>fo[o</sub><span style=vertical-align:top>b]ar</span>",
    [["stylewithcss","false"],["subscript",""]],
    "<sub>fo[o</sub><span style=\"vertical-align:top\"><sub>b]</sub>ar</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"subscript":[true,false,"",false,true,""]}]
]
