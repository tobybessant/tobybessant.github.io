A lightweight terrain generator developed to explore the use of noise functions to generate height maps for terrain vertexes.

# Skills Developed

- Use of an unmanaged language, C++.
- Used OpenGL and associated libraries to produce realistic terrains.
- Use of noise functions to seed pseudo-random value generation for a terrain height-map.
- User input handling to allow users to interact with the application output.
- Integration of [FastNoise](https://github.com/FastNoise) to apply height-map values to a grid of vertexes.
- Applied my algorithms knowledge to generate fast and efficient vertex-updating functions to live-update the terrain on keypress events.

## Additional Comments

I thoroughly enjoyed producing this project, as it was my first application based aroud PCG - a topic I have been interested in exploring for some time. I am proud of how well it renders terrains, and that the user can alter any of the parameters used in the terrain generation process. The user can press certain keys to alter the terrain perameters during runtime, and see the terrain update immediately. One of the challenges with this was managing the system memory, as each time I regenerated the positional data it would use an increasing amount of memory. I overcame this by editing the existing vertex heights and simply re-loading it into the GPU buffer. This project taught me how I can be conscious of a system's memory & how it can affect performance.
