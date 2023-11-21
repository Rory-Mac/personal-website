---
layout: narrow
title: Computer Networks
---
<h4>Computer Networks</h4>
<!--
(Physical/Data-Link/Network-Access Layer): ethernet, wi-fi, etc
explain how OSI and TCP/IP model is hierarchy of software abstractions atop physical/data-link layer, explain packet encapsulation
(Network/Internet Layer): ARP, IP, ICMP
(Transport Layer): TCP, UDP
(Application Layer): DNS, SMTP, FTP, Telnet, SMTP, HTTP
-->
<p>The internet is a network of networks through which bits are transmitted to and from connected devices. We humans cannot communicate in bits. This 
    is true both biologically and digitally, and so we apply a hierarchy of compressions and communication protocols in both cases. In terms of 
    biology, this looks something like sensory memory compressed into an audition-based declarative memory transmitted via an electrical and chemical layer 
    over the physical layer of vocal chords through an atmospheric medium. Digitally speaking, it is a hierarchy of protocols agreed upon by international
    agencies and subscribed to by software companies and hardware manufacturers, summarised through heuristics such as the OSI model or TCP/IP protocol stack.   
</p>
<p>Lets consider the example of MAC addresses. MAC addresses (also known as hardware addresses or physical addresses) are 12-char (48-bit) hexadecimal tags 
used to identify a physical device on a local network. It is a fundamental component of many data-link protocols including ethernet, bluetooth and wi-fi 
(all part of the IEEE 802 family of protocol standards) and is typically hard-coded onto the Network Interface Card of a computer via a ROM or EEPROM chip.
</p>
<p>Lets now consider the example of IP addresses. IP addresses are numerical addresses for internet-connected devices basedon the IP protocol, as 
overseen by the IETF and the IANA. Two IP address formats exist IPv4 (e.g. 192.168.0.1) and IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
IPv6 was developed to address the limitations of the IPv4 address space. IP addresses can be public (globally routable) or private (locally routable).
Regional Internet Registries (RIRs) manage public address assignment whilst simple home or office routers assign private addresses. Private IP addresses 
can be translated to public IP addresses via the Network Address Translation (NAT) protocol. Management of the NAT protocol is the responsibility of the 
router and router firewall at the network edge.
</p>
<p>The infrastructure of the internet itself is complex. The largest networks are termed Network Service Providers (NSPs) connected to one another via 
    Internet Exchange Points (IX). They are also connected and provide networking services to regional and local Internet Service Providers (ISPs). 
    No matter how large the network, the network needs to offer connectivity and routing services. Thus we can visualise the hierarchy of internet 
    service providers approximately as follows:
    <img src="/Assets/images/ISP_NSP_1.png" width="100%" height="100%"></p>
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