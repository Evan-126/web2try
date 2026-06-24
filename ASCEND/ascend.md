// the purpose of this document is to create pre-markdown webpages to detail individual achievements or progress within organizations. 


# ASCEND CONTRIBUTIONS
The ASCEND student organization is a visionary group engaged in multiple intercollegiate competitions to develop sustainable emergency response aircraft. The competition we are most heavily involved in currently is GoAero (link: [https://www.goaeroprize.com/](https://www.goaeroprize.com/) ), in which we have won an Innovation Award! (link: [https://www.goaeroprize.com/post/team-ascend-ut-austin-goaero-innovation-award](https://www.goaeroprize.com/post/team-ascend-ut-austin-goaero-innovation-award)). 
Overall, the idea we have devised (and are currently in the process of prototyping) is a stripped-down ATV frame, which we strip down to bare metal, convert to electric and install a large propeller, paraglider wing, and the infrastructure to sturdily mount them. From there, we remotely (and eventually autonomously) control every single degree of freedom of the vehicle – from the minute wing adjustments to the two massive electric motors. The vehicle used in this competition also is used in 

I have also taken on the role of President for a small group competing in NASA’s Blue Skies Competition (link: [https://blueskies.nianet.org/](https://blueskies.nianet.org/)). 

ASCEND stands for Aerial Solutions to Combat Emergencies and Natural Disasters, and the mission of the org never strays far from that  The GoAero vehicle 

Fig. 1.1 shows our whole team around the vehicle. 



## Steering
One of the biggest mechanical challenges of our project is attaching mechanical actuators (to be operated remotely) that provide the same functionalities a human would expect from the ATV, while also reducing weight as much as possible. I personally have taken over designing an actuator for steering. Given a pre-existing servo, my challenge was to design around the cramped area inside the forward steering box and the servo to deliver an assembly that would not only achieve steering functionality, but also reduce overall weight of the vehicle and reduce overall manufacturing costs all without compromising the integrity of the existing tube chassis or control arms. Initially, we did not know the material or thickness of the tubes, which added a little more complexity.

### Initial Analysis. 
Naturally, the first step in creating this system was ensuring I would not harm the preexisting functionality of the steering assembly. Working with a teammate, we recreated a SolidWorks CAD model of the area around the forward steering box. After some discourse with more senior engineering students, we realized that the central rod that originally connected the handlebars to the knuckle (where the tie rods are attached) was the ideal part to connect the servo to, as it would require minimum adjustments to the existing frame. We then determined how much torque on the steering shaft was required to move the wheels at standstill – the time where there is the most resistance. This number was then plugged into an adjusted CAD model of where I expected the servo to attach to the steering arm, and a finite element analysis was run on tubes of varying thickness and using both aluminum and steel (recall we did not know the material or thickness of the tubes at this point in time). 

Shown below are images of the steering box layout before I attacked it (Fig. 2.1.1), the FEA setup (Fig. 2.1.2), and the first analysis performed, assuming aluminum tube of 0.035” thickness and 11 ft-lb torque applied 2” from the fixed knuckle (Fig. 2.1.3). 

Figure 2.1.1

![Figure 2.1.2 FEA setup ](https://raw.githubusercontent.com/Evan-126/web2try/main/ASCEND/shaftFEA_setup.jpg)
Figure 2.1.2

![Figure 2.1.3 FEA running ](https://raw.githubusercontent.com/Evan-126/web2try/main/ASCEND/shaftFEA_failed.jpg)
Figure 2.1.3

The value for the torque was determined by pushing on one side of the handlebars, then lying down and lifting objects of varying weights and selecting one that felt similar, then multiplying that weight (lb) by the distance from the axis of rotation. We also multipled it by a safety factor of 2 to account for any human error, or the fact that unforeseen uneven impacts on the wheels when landing or hitting obstacles would likely induce torques even greater than that required for just turning the wheels at a standstill. 

## General Layout
To introduce the actuating servo into this assembly, I knew there would have to be at least a static part to hold the servo, a part to connect between the servo and steering shaft, and another part rotating with the steering shaft. All of these had to be built to transfer the relatively massive 15Nm of torque required. At first, my superiors in the organization introduced another small complication – that I should attempt to achieve this goal without drilling any holes in the tubes (or otherwise physically altering the underlying chassis). There were some bureaucratic disputes for a time, but I was finally able to explain that it would be nearly impossible to provide the required torque to the steering shaft via a clamping mechanism without deforming the shaft or simply sliding around it. I also stated that even if it were possible, it would be much easier to bolt or weld a connector to the shaft. This can be seen in my initial prototypes which feature both a clamping and bolting option to both the steering shaft and the surrounding steering box. 

Connecting to the box was another issue. It was determined that in the CAD model from the semester before I joined the organization, the tubes were a slightly incorrect size, and the two side rails were a little bit farther apart on the CAD than in reality. This was the primary reason why I dedicated some time to updating the CAD, even though it was beyond the scope of my role at the time.  

Figure 2.2.1 shows this updated CAD model.

## Prototypes
### Distance Verification
The first prototype I created was almost entirely for the sake of verifying the distances on the CAD model. Our organization is still relatively new and small, and especially at that time did not have a tool that could be used to accurately measure the sizes of everything in the steering box, and the angle the shaft made with the surrounding rails was especially difficult to determine. Of course I first tried to find specs online – but to no avail. Fig. 2.3.1-3 show the top view, side view, and the visuals after installation of the first prototype I made.

![Figure 2.3.1 1st prototype top view ](https://raw.githubusercontent.com/Evan-126/web2try/main/ASCEND/greenbase_top.jpg)
Figure 2.3.1

![Figure 2.3.2 1st prototype side view ](https://raw.githubusercontent.com/Evan-126/web2try/main/ASCEND/greenbase_side.jpg)
Figure 2.3.2

![Figure 2.3.3 1st prototype installed ](https://raw.githubusercontent.com/Evan-126/web2try/main/ASCEND/greenbase_cut_installed.jpg)
Figure 2.3.3



### Capstan
Initially, in the interest of prioritizing manufacturability and lowering cost, I decided to design a capstan drive system to turn the steering shaft. 

### Geared

## Test Stand
### Creation

### Usage

## Build and Design Mentor

### Build 

### Design
