import os
import re

scss_path = 'estilo.scss'
css_path = 'estilo.css'

with open(css_path, 'r', encoding='utf-8') as f:
    css_lines = f.readlines()

vars_map = {
    '#ad2debcc': '$color-primario',
    'rgba(173, 45, 235, 0.4)': '$color-hover',
    'rgba(173, 45, 235, 0.8)': '$color-overlay',
    '#1e2326': '$bg-main',
    '#252A2E': '$bg-light',
    '#fff': '$text-light',
    '#e0e0e0': '$text-dim',
    '#333': '$text-color',
}

new_scss = [
    '// VARIABLES DE COLOR Y FUENTES\n',
    '$color-primario: #ad2debcc;\n',
    '$color-hover: rgba(173, 45, 235, 0.4);\n',
    '$color-overlay: rgba(173, 45, 235, 0.8);\n',
    '$bg-main: #1e2326;\n',
    '$bg-light: #252A2E;\n',
    '$text-light: #fff;\n',
    '$text-dim: #e0e0e0;\n',
    '$text-color: #333;\n',
    '$font-main: "Work Sans", sans-serif;\n',
    '$font-title: "Righteous", cursive;\n',
    '\n'
]

# We will read exactly from CSS, and replace actual colors with our $ vars
# CSS contains everything correctly except it lacks variables.
# So we simply build SCSS directly from CSS, which is completely valid!
for i in range(len(css_lines)):
    line = css_lines[i]
    for color_val, var_name in vars_map.items():
        if color_val in line:
            line = line.replace(color_val, var_name)
            
    for color_val, var_name in vars_map.items():
        # case insensitive regex
        line = re.sub(re.escape(color_val), var_name, line, flags=re.IGNORECASE)
    
    new_scss.append(line)

with open(scss_path, 'w', encoding='utf-8') as f:
    f.writelines(new_scss)

print('Success!')
