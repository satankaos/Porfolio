import os

css_file = 'estilo.css'
scss_file = 'estilo.scss'

with open(css_file, 'r', encoding='utf-8') as f:
    content = f.read()

variables = """// VARIABLES DE COLOR Y FUENTES
$primary-color: #ad2debcc;
$primary-hover: rgba(173, 45, 235, 0.4);
$primary-overlay: rgba(173, 45, 235, 0.8);
$bg-main: #1e2326;
$bg-light: #252A2E;
$text-light: #fff;
$text-dim: #e0e0e0;
$border-color: #333;
$font-main: 'Work Sans', sans-serif;
$font-title: 'Righteous', cursive;

"""

content = content.replace('#ad2debcc', '$primary-color')
content = content.replace('rgba(173, 45, 235, 0.4)', '$primary-hover')
content = content.replace('rgba(173, 45, 235, 0.8)', '$primary-overlay')
content = content.replace('#1e2326', '$bg-main')
content = content.replace('#252A2E', '$bg-light')
content = content.replace('#fff', '$text-light')
content = content.replace('#e0e0e0', '$text-dim')
content = content.replace('#333', '$border-color')

with open(scss_file, 'w', encoding='utf-8') as f:
    f.write(variables + content)

print('SASS file created successfully.')
