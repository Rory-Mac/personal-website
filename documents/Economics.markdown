---
layout: narrow
title: Economics
---
<h4>Economics</h4>
<p>Goods are value-attributed physical resources. Services are value-attributed non-physical resources. Resources are exchanged between
consumers within a market. A market is the totality of exchange of a resource. Consumers are each attributed a utility function that maps
all possible resource bundles that could be possessed with a utility value. Take as an introductory example \(\>U(X,Y) = \log(X) + \log(Y)\).</p>
<p><img src="../Assets/images/utility_overview.png" width="70%" height="70%"></p>
<p>Any utility function defined over \(n\) resources will produce an \(n\)-surface in \((n+1)\)-space that maps all bundles of \(n\)
to a corresponding utility. A consumer's resource bundle determines the point they occupy in their utility space. Additionally, a
contour map of the utility space provides a set of indifference curves: paths along which the consumer's utility remains constant. For any
two resources, \(X\) and \(Y\), we define a consumer's marginal rate of substitution.
\[ MRS = \frac{\partial U \backslash \partial X}{\partial U \backslash \partial Y} \]
This is the amount of \(X\) the consumer is willing to exchange for the consumption of \(Y\). The set of vectors from a resource bundle to
all others in a utility space defines a set of possible trades. Any vector pair across two utility spaces that are negative counterparts of
one another and both yield a higher utility than the current utility of their respective consumers, represents a viable trade.</p>
<p>Trades occuring within a market produce a distribution of MRS. The spread of this distribution acts as a measure of liquidity, i.e. for
a large enough trade volume, a narrow spread indicates that the average MRS is one that approximately all market participants agree upon. 
A currency is a resource that market participants agree to use as a medium of exchange for trading, and tend to be the most liquid.</p>
<p>Income exists as the exchange of resources for currency, expense as the exchange of currency for resources, assets as stored currency
and resources, and liability as stored expense. Let us denote zero-sum relations \(≁\) and non-zero-sum relations \(\sim\).</p>
<p><img src="../Assets/images/income_expense.png" width="70%" height="70%"></p>
<p>\[Profit = Income - Expense, \>\>\>\> Equity = Asset - Liability, \>\>\>\> Profit = \Delta Equity\]
Unlike fixed expense, variable expense exists in proportion to income. We define the marginal propensity to consume as this proportion,
and operating leverage as the ratio of fixed to total expense. Higher operating leverage corresponds to higher risk.
\[TC = FC + VC, \>\>\>\>  MPC = \frac{dC}{dY}, \>\>\>\> \frac{FC}{TC} = \frac{FC}{FC + VC}\]
The utility function that derives the discrete utility value of a resource bundle may do so probabilistically. This reflects that a
consumer perceives the consumption of a resource as creating a probability of positive and negative change in equity across time.
Thus, we can envision a probabilistic tree of risk to reward ratios overlaying each resource bundle.  </p>
<p>A market exists in market equilibrium if the quantity of demand is equal to the quantity of supply.
\[(\exists P)(Q_d(P) = Q_s(P)) \implies Q* = Q_d(P*) = Q_s(P*)\]
This equilibirium can be found as the point of intersection between supply and demand curves, however in reality, the curves themselves 
are in constant flux as is movement towards equilibrium. Candlestick charts reflect this movement.</p>
<p>Non-derivative assets and liabilities can be valued as annuities or perpetuities.
\[ FV = PV(1 + r)^n, \>\>\>\> A = P(1 + \frac{r}{n})^{nt} \]
The present value of an annuity is taken as the sum of its discounted cash flows.
\[ PV = \frac{C}{r} \left(1-\frac{1}{(1+r)^{n}}\right), \>\>\>\> FV = \frac{C}{r}((1+r^n)-1) \]
\[ PV = \frac{C}{r-g}\left(1-\left(\frac{1+g}{1+r}\right)^n\right), \>\>\>\> FV = \frac{C}{r-g}\left((1+r^n)-(1+g)^n\right) \]
The present value of a perpetuity is then simply the value of an annuity in the limit of \(n\).
\[ PV = C/(r-g)\]</p>
<p>We can extend definitions of risk and expected return of assets to portfolios comprised of those assets.
\[ E(x) = \sum_{i=0}^{n}x_ip(x_i) \>\>\>\>\>\>\>\> \sigma^2 = \sum_{i=0}^{n} p(x_i)(x_i - E(x_i))^2 
\>\>\>\>\>\>\>\> Cov_{x,y} = \frac{\sum_{i=0}^{n} (x_i - E(x_i))(y_i - E(y_i))}{n - 1} \]
\[ E(p) = \sum_{i=0}^{n}w_iE(x_i) \>\>\>\>\>\>\>\> \sigma_p^2 = \sum_{i=0}^n \sum_{j=0}^n w_i w_j Cov(i,j) \]
The same can be done for the \(\beta\) of a portfolio \(p\) and investment \(s\). 
\[ \beta_s = \frac{E(r_s) - r_f}{E(r_m) - r_f} \>\>\>\>\>\>\>\> \beta_p = \frac{Cov(r_p, r_b)}{Var(r_b)} \]</p>
