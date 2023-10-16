---
layout: narrow
title: Operating Systems
---
<h4>Operating Systems</h4>
<p>A process is a runtime instance of a stored program. An operating system can be thought of as a process that manages all other processes
on a computer system. Responsibilites of an operating system include thread scheduling, caching, memory management, process isolation,
paging, and IO interrupt handling. The kernel is the core of the operating system that manages system resources, it does not include the 
operating system's many kernel applications, which include device drivers, a process scheduler, kernel error detectors, power managers,
system call interfaces through which user-applications request system resources, and a virtual memory manager. The 
virtual memory manager is a kernel process that manages a page table. The page table maps physical memory to virtual memory as seen by 
user processes.</p>
<p><img src="/Assets/images/OS_paging.png" width="100%" height="100%"></p>
<p>System call interfaces provide process user-process-invoked system calls. These interfaces include process control, file management,
device management, information management, communication and protection. A process control interface will offer syscalls like
fork(), spawn(), exit() and wait(). A file management interface will offer syscalls like open(), close(), read() and write(). A device management interface
will offer syscalls like ioctrl(), read() and write(). An information management interface will offer syscalls like getpid(), alarm() and sleep(). A
communication interface will offer syscalls like pipe(), mmap(), and shmget(). Lastly, a protection interface will offer syscalls like
chmod(), umask(), chown().</p>
<p><img src="/Assets/images/deadlock.png" width="90%" height="90%"></p>
<p>A deadlock arises from four the presence of four process-resource conditions: mutual exclusion (two or more resources are non-shareable),
hold and wait (a process holds an assigned resource will waiting for assignment of a requested resource), no preemption (if a process 
requests a resource already assigned to another process, it is only taken if freed by said other process) and circular wait (a circular
dependency exists between process-resource requests). This is shown visually above. We can avoid deadlocks by removing one of these conditions 
or accept the inevitability of their occurence and look at mitigation techniques instead.</p>