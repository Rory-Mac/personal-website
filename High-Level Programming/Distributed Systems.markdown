---
layout: narrow
title: Distributed Systems
---
<h4>Distributed Systems</h4>
<p>In the context of software, we think of a system as the infrastructure enabling the provision of software services to requesting 
devices. This requires computation. In the case of a non-distributed system, the computation is performed by a singular process running 
locally on the end user's host device. In the case of a distributed system, the computation is performed by multiple processes across
multiple devices via remote procedure calls. Unlike a function call, which calls for a procedure to be run on the host device, a remote
procedure call (RPC) calls for a procedure to be run on a networked device. It is the responsibility of the operating system to establish the
communication channel between the requesting device and the networked device for the RPC to be queried and answered. In the discussion of
distributed systems, an RPC typically refers to the delegation of the computation of a local query to a networked device, though the query
might instead be processed by another process on the same device.</p>
<p><img src="/Assets/images/distributed_systems_overview.png" width="100%" height="100%"></p>
<p>Distributed systems use a client-server or peer-to-peer model, as illustrated above. Consider the leftmost heuristic, which employs the
client-server model. The outermost networked devices are end-users, clustered within local area networks. The internal spheroid cluster
acts as a distributed system, delegating and responding to remote procedure calls made both internally from other servers and externally
from end users. This simplified heuristic can be extended to give a big picture view of the internet. Imagine we replace the edges 
connecting the local area networks to the distributed system with a complex hierarchy of load balancers, routing devices and device 
look-up services that cumulatively act to connect end-users with a service of choice. Then we can imagine a million amoeba like device
clusters offering unique services to end-users as well as one another. Thus, we can conceptualise the internet as a distributed system
whose service offered is itself the connection of systems and users.</p>
<h4>Load Balancing</h4>
<p>Consider that internet traffic routes asynchronously from a client cluster to a server cluster, through a hierarchy of routers maintained
by a hierarchy of internet service providers. At the network edge, client-internet or server-internet, there may exist proxies. Proxies
are servers that manipulate rather than process requests. Forward proxies manipulate requests on the client-side, reverse proxies manipulate
requests on the server-side. The most prominent example of a reverse proxy is that of the load balancer, which reroutes client requests
across application servers to ensure an evenly distributed workload.</p>
<p><img src="/Assets/images/load_balancing.png" width="100%" height="100%"></p>
<p>Load balancing has additional benefits beyond even work distribution. Load balancers can help ensure that the provision of a software
service by a server cluster is fault-tolerant, so that if any one server fails, the load balancer can detect the network failure and 
reroute client requests elsewhere. In the ideal case, the functionality of a server cluster is proportional to the number of working
servers. This is referred to as graceful degradation.</p>
<!--
what is a forward proxy, with examples
what is a reverse proxy, with examples
what is load balancing
how does load balancing allow for fault tolerance and graceful degradation
vertical scaling vs horizontal scaling (more computer per node, versus mmore nodes)
-->