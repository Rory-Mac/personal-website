---
layout: narrow
title: Computer Networks
---
<h4>Computer Networks</h4>
<p>The lowest level of abstraction in computer networking is the physical layer, that is, the physical medium by which bits of data are transferred. Ethernet, Wi-Fi,
USB, Bluetooth and Fiber Optics, are all examples of physical layer standards. Network protocols exist as abstractions atop this physical layer, defining how raw data is 
formatted and sequenced into network packets before transmission. Transmission and reception of network packets is referred to as packet switching, and allows computers
on a computer network to maintain multiple simultaneous connections with one another. Network packets consist of a header, describing the data to be transferred, and a
payload, storing the data itself.</p>
<p><img src="/Assets/images/OSI_TCP_IP.png" width="100%" height="100%"></p>
<p>The OSI model and TCP/IP model are models used to categorise network protocols seated atop the physical layer. Each layer
corresponds to an instance of encapsulation, whereby the packets of the more abstract network protocol when combined with an additional header become the payload of the
less abstract network protocol. Packets may fragment into numerous network packets at less abstract network layers. Physical frames, such as an ethernet frame, format
packet data to enable transmission over a specific physical medium, such as ethernet. The payload of such a physical frame will be a frame belonging to a protocol
that deals with transmission control, error management, and interoperability between protocols. This is defined in the OSI stack by the MAC and Logic-Link sublayers of
the Data-Link layer.</p>
<p><img src="/Assets/images/MAC_frame_bitfields.png" width="100%" height="100%"></p>
<p>MAC (Medium Access Control), is a data-link protocol managing the exchange of data through a physical medium between nodes in a computer network. This is not to be
confused with MAC addresses, also known as physical or hardware addresses, which are unique identifiers stored in the firmware or read-only memory of a network interface
controller belonging to a host device. The payload of a MAC frame is the packet of a more abstract network protocol. Local network routers maintain a forwarding table
used to map MAC addresses to authenticated socket connections. This gives an efficient means of routing network traffic within local networks. To efficiently route 
packet data between networks, IP (Internet Protocol) addressing is introduced as an abstract layer atop the data-link/network-interface layers.</p>
<p>IP addressing is a hierarchical form of addressing, mapping to a hierarchy of global routing networks called autonomous systems.</p>

<!--
IP addressing and global routing
TCP handshake
DNS and HTTP
-->

<p>Before looking further into application-layer protocols, it is important to understand the TCP/IP protocol and the client-server model. The 
client-server model makes up a significant portion of internet traffic, that is simply, client devices requesting resources from server devices. There 
does not necessarily exist a distinction between a client and server device, any device may run a client or server program designed to send or retrieve 
data resources over a computer network based on a given protocol. A server could be as simple as a home Desktop port-forwarding a web application through 
the home router, or as complex as a large server farm. Transmission Control Protocol (TCP) Handshakes instantiate the client-server model. Any 
communication protocol exists within a stack of communication protocols, unless the communication protocol itself is the base physical layer. Data frames
from more abstract protocol layers are encapsulated by less abstract protocol layers. Communication of data over an abstract protocol layer requires 
encapsulation of that data by all other underlying protocols. Consider the following:
<img src="/Assets/images/encapsulation.png" width="100%" height="100%"></p>  
<p>Lets now look to DNS. DNS (Domain Name System) is a fundamental component of the internet that is responsible for the translation of human-readable 
domain names (www.example.com) to corresponding IP addresses. ICANN plays a key role in the coordination and oversight of global DNS, including 
the delegation of such maintenance to individual domain registrars and TLD authorities. Here is an overview of DNS resolution:
<ol>
    <li>A DNS resolution request is made: A web browser or web application makes a request to a DNS resolver to resolve a given domain name. The DNS 
        resolver acts as a cache so that frequently requested domain names are quickly resolved. It is typically a part of
        the ISP network. 
    </li>
    <li>The DNS resolution request flows through a hierarchy of DNS servers (root-level DNS servers, top-level-domain servers, authoritative DNS servers,
    etc.)</li>
    <li>An authoritative DNS server is queried if the result has not already been cached in a DNS resolver and the result is sent back to the DNS client
    (managed by the web browser or network application).</li>
    <li>A TCP handshake is initiated and if successful, application-layer data is exchanged.</li>
</ol></p>
<p>The TCP handshake itself is relatively simple. Having been completed, a client and server can begin exchanging data with principles of reliable data
transfer (RDT) in mind: <img src="/Assets/images/TCP_Handshake.png" width="100%" height="100%"></p>